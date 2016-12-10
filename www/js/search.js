angular.module('starter.controllers').controller('SearchController', function($scope, $firebaseObject){
  $scope.searchResults = [];
  $scope.searchFor = function(searchTerm){
    var syncObject = $firebaseObject(fb.child("providers/"));
    syncObject.$bindTo($scope, "searchResults");
  };
});
