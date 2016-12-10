
angular.module('starter.controllers').controller('AppCtrl', function($scope, $ionicModal, $timeout, $firebaseAuth, $location) {

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
// FirebaseUI config.
    var uiConfig = {
//        signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//          firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
//        tosUrl: '<your-tos-url>'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function(loginData) {
    console.log('logging in user');

    firebase.auth().signInWithEmailAndPassword(loginData.username, loginData.password).then(function() {
      console.log('logged in successfully!!');
      $scope.closeLogin();
    }).catch(function(error) {
      console.error(error.message);
    });
  };

    $scope.registerUser = function(loginData) {
      console.log('registering new user');
      firebase.auth().createUserWithEmailAndPassword(loginData.username, loginData.password).then(function() {
        console.log('user created!!!');
      }).catch(function(error) {
        console.error(error.message);
      });
    };
});
