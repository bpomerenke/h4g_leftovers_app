// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var fb = null;
var currentSeeker = null; // to be established from popup

angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  var config = {
    apiKey: "AIzaSyBFib-8ceqG7UD0fn7ZV8OXnfwkeEc9e84",
    authDomain: "elvis-2ae10.firebaseapp.com",
    databaseURL: "https://elvis-2ae10.firebaseio.com",
    storageBucket: "elvis-2ae10.appspot.com",
    messagingSenderId: "1092206200438"
  };
  firebase.initializeApp(config);
  fb = firebase.database().ref();



//  fb = new Firebase("https://elvis-2ae10.firebaseio.com");
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.userAuth', {
    url: '/userAuth',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'AuthCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchController'
      }
    },
    params: {
      searchTerm:null,
      needs: null
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller: 'BrowseCtrl'
        }
      }
    })

    .state('app.needs', {
      url: '/needs',
      views: {
        'menuContent': {
          templateUrl: 'templates/needs.html',
          controller: 'NeedsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/needs');
});

angular.module('starter.controllers', ['firebase']);
