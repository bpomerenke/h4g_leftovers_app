
angular.module('starter.controllers').controller('BrowseCtrl', function($scope,$firebaseObject){
  $scope.searchResults = [];
  var syncObject = $firebaseObject(fb.child("providerCategories/"));
  syncObject.$bindTo($scope, "searchResults");
});
