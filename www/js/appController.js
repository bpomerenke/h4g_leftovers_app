
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
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function(loginData) {
    console.log('logging in user');
    var fbAuth = $firebaseAuth(fb);
    fbAuth.$authWithPassword({
      email: loginData.username,
      password: loginData.password
    }).then(function(authData) {
      $scope.closeLogin();
    }).catch(function(error) {
      console.error("ERROR: " + error);
    });
  };

    $scope.registerUser = function(loginData) {
      console.log('registering new user');
      var fbAuth = $firebaseAuth(fb);
        fbAuth.$createUser({email: loginData.username, password: loginData.password}).then(function() {
            return fbAuth.$authWithPassword({
                email: loginData.username,
                password: loginData.password
            });
        }).then(function(authData) {
          // Lets push them to a profile config page
            //$location.path("/todo");

            $scope.closeLogin();
        }).catch(function(error) {
            console.error("ERROR " + error);
        });
    };
});
