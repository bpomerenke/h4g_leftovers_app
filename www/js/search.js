angular.module('starter.controllers').controller('SearchController', function($scope, $rootScope, $firebaseObject, $stateParams) {

  $scope.searchResults = [];

  // Perform search (state will transition right after)
  $rootScope.$on('updateSearchParams', function(e, needs){
    console.log('updating:');
    console.log(needs);
    $scope.searchFor(null, needs);
  })

  $scope.searchFor = function(searchTerm, needs) {
    var syncObject = $firebaseObject(fb.child("providers/"));
    syncObject.$bindTo($scope, "searchResults");
  };

});
