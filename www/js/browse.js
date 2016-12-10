
angular.module('starter.controllers').controller('BrowseCtrl', function($scope){
  $scope.providerList = [];
    $scope.searchResults = [];
    return firebase.database().ref('/providerCategories').once('value').then(function(snapshot) {
      console.log("getting categories ")
      var providerCategories = snapshot.val();
      var count = 0;
      for(idx in providerCategories){
        console.log(providerCategories[idx]);
        $scope.searchResults.push(providers[idx]);
        if(count++ > searchTerm.length) break;
      }
      $scope.$apply();
    });
});
