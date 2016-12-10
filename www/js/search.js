var geocoder = new google.maps.Geocoder();
var currentLatLng = new google.maps.LatLng(37.198583, -93.278616);

angular.module('starter.controllers').controller('SearchController', function($scope, $rootScope, $firebaseObject, $stateParams) {

  $scope.searchResults = [];
  var distances = [];
  $scope.getDistance = function(idx){
    return distances[idx];
  }
  $scope.$watch('searchResults', function(newVal, oldVal){
    if(newVal!==oldVal){
      for(var idx in newVal){
        var item = newVal[idx];
        if(!item || !item.address1 || !item.city || !item.state || !item.zip) continue;
        geocoder.geocode({'address': item.address1 + ", " + item.city + ", " + item.state + " " + item.zip}, function(results, status) {
           if (status == 'OK') {
             var location = results[0].geometry.location;
             var distance = google.maps.geometry.spherical.computeDistanceBetween(currentLatLng, location) * 0.000621371192;
             distance = Math.round(distance*100)/100;
             distances.push(distance);
             $scope.$apply();
           }
         });
      }
    }
   //
  });

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
