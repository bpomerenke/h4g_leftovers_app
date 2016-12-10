angular.module('starter.controllers').controller('SearchController', function($scope, $rootScope, $firebaseObject, $stateParams) {

  $scope.searchResults = [];

  // Perform search (state will transition right after)
  $rootScope.$on('updateSearchParams', function(e, needs){
    // console.log('updating:');
    // console.log(needs);
    // $scope.searchFor(null, needs);
  })


  $scope.$on('$stateChangeStart',function(e, toState, toParams) {
///    console.log('updating:');
    // console.log(toParams);
    // console.log(toState);
  //  console.log($stateParams);
    //$scope.searchFor(null, toParams.needs);
    //console.log('stateChangeStart');
  });

  $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams){
        $scope.searchFor(null, toParams.needs);
      });


  $scope.searchFor = function(searchTerm, needs) {
    if (needs) {
      console.log("needs count " + needs.length);
    }
    var syncObject = $firebaseObject(fb.child("providers/"));

    syncObject.$bindTo($scope, "searchResults");
  };

});
