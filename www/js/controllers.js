var fb=null;

angular.module('starter.controllers', ['firebase'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('BrowseCtrl', function($scope){
  console.log('browse control init');
    $scope.searchResults = [];
    return firebase.database().ref('/providerCategories').once('value').then(function(snapshot) {
      var providerCategories = snapshot.val();
      var count = 0;
      for(idx in providerCategories){
        console.log(providerCategories[idx]);
        $scope.searchResults.push(providerCategories[idx]);
      }
      $scope.$apply();
    });
})


.controller('NeedsCtrl', function($scope) {
  $scope.groups = [
    {
      active: false,
      iconActive: 'ion-sad', // icon reference http://ionicons.com/
      iconInactive: 'ion-happy-outline',
      label: 'Are you ok?',
      needs: [
        { label: "I'm hungry", needCode:'fud'},
        { label: "I'm sick or in pain", needCode:'med', emergencyConcern:true},
        { label: "I need somewhere to go", needCode:'shl'}]
    },
    {
      active:false,
      iconActive: 'ion-ios-chatboxes',
      iconInactive: 'ion-ios-chatboxes-outline',
      label: 'Need to talk?',
      subLabel: 'What do you need help with?',
      needs: [
      //TODO: Utilize emergencyConcern as signal to interrupt and check if there is an emergency
        { label: 'Medical problems', needCode:'med', emergencyConcern:true},
        { label: 'Abuse or violence', needCode:'abv', emergencyConcern:true},
        { label: 'Mental or emotional', needCode:'psy'},
        { label: 'Drugs or alcohol', needCode:'sub'},
        { label: 'Work or money', needCode:'fin'},
        { label: 'Support and advice', needCode:'adv'}]
    }
  ];

  $scope.toggleGroup = function(group) {
    group.active = !group.active;
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})

.controller('SearchController', function($scope, $firebaseObject){
  $scope.searchResults = [];
  $scope.searchFor = function(searchTerm){
    fb = new Firebase("https://elvis-2ae10.firebaseio.com");

    var syncObject = $firebaseObject(fb.child("providers/"));
    syncObject.$bindTo($scope, "searchResults");
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
