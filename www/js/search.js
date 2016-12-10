var fb=null;

angular.module('starter.controllers').controller('SearchController', function($scope, $firebaseObject){
  $scope.searchResults = [];
  $scope.searchFor = function(searchTerm){
    //fb = new Firebase("https://elvis-2ae10.firebaseio.com");

    //var syncObject = $firebaseObject(fb.child("providers/"));
    //syncObject.$bindTo($scope, "searchResults");
    // $scope.searchResults = [];
    // return firebase.database().ref('/providers').once('value').then(function(snapshot) {
    //   var providers = snapshot.val();
    //   var count = 0;
    //   for(idx in providers){
    //     console.log(providers[idx]);
    //     $scope.searchResults.push(providers[idx]);
    //     if(count++ > searchTerm.length) break;
    //   }
    //   $scope.$apply();
    // });
  };
});
