var geocoder = new google.maps.Geocoder();
var currentLatLng = new google.maps.LatLng(37.198583, -93.278616);

angular.module('starter.controllers')


.controller('SearchController', function($scope, $firebaseObject){
  $scope.searchResults = [];
  $scope.searchFor = function(searchTerm){
     var syncObject = $firebaseObject(fb.child("providers/"));
     syncObject.$bindTo($scope, "searchResults");

     $scope.$watch('searchResults', function(newVal, oldVal){
       if(newVal!==oldVal){
         for(var idx in newVal){
           var item = newVal[idx];
           if(!item || !item.address1 || !item.city || !item.state || !item.zip) continue;
           geocoder.geocode({'address': item.address1 + ", " + item.city + ", " + item.state + " " + item.zip}, function(results, status) {
              if (status == 'OK') {
                var location = results[0].geometry.location;
                var distance = google.maps.geometry.spherical.computeDistanceBetween(currentLatLng, location) * 0.000621371192;
                console.log(distance);
                // the line below fails because distance is null?
                item.distance = distance;
              }
            });
         }
       }
      //
    });
  }
});
