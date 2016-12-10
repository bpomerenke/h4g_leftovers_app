angular.module('starter.controllers').controller('NeedsCtrl', function($scope, $ionicModal, $rootScope, $state) {

  $ionicModal.fromTemplateUrl('templates/user.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.groups = [
    {
      iconActive: 'ion-sad', // icon reference http://ionicons.com/
      iconInactive: 'ion-happy-outline',
      label: 'Are you ok?',
      needs: [
        { label: "I'm hungry", needCode:'fud'},
        { label: "I'm sick or in pain", needCode:'med', emergencyConcern:true},
        { label: "I need somewhere to go", needCode:'shl'}]
    },
    {
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
    },
    {
      iconActive: 'ion-ios-home',
      iconInactive: 'ion-ios-home-outline',
      label: 'Need anything?',
      subLabel: 'Do you have the things you need?',
      needs: [
      //TODO: Utilize emergencyConcern as signal to interrupt and check if there is an emergency
        { label: 'Food', needCode:'fud'},
        { label: 'Shelter', needCode:'shl', emergencyConcern:true},
        { label: 'Facilities', needCode:'fac'},
        { label: 'Clothing or Supplies', needCode:'sup'},
        { label: 'Work or money', needCode:'fin'},
        { label: 'Transportation', needCode:'trn'}]
    }
  ];

  $scope.numActive = 0;

  $scope.toggleNeed = function(need) {
    need.active = need.active ? !need.active : true;
    if(need.active) $scope.numActive++;
    else $scope.numActive--;
  }

  $scope.saveUser = function(user) {
    $scope.modal.hide();
  }

  $scope.toggleGroup = function(group) {
    group.active = !group.active;
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  $scope.gotoSearch = function() {

    //
    // var groups = Enumerable.From($scope.groups)
    // var needs = groups.SelectMany(function (g) {
    //   return Enumerable.From(g.needs).Select(function(n) { return n.active });
    // }).ToArray();
    //
    //

    var needs = [];
    for (i=0;i<$scope.groups.length;i++) {
      for(j=0;j<$scope.groups[i].needs.length;j++) {
        if ($scope.groups[i].needs[j].active) {
          console.log('gotta need');
          needs.push($scope.groups[i].needs[j]);
        }
      }
    }

    for(i=0;i<needs.length;i++) {
      console.log(needs[i].label);
    }

    //TODO: Get info about seeker via modal popup
    if (!currentSeeker) {

      $scope.modal.show();

      // $scope.$on('$destroy', function() {
      //   $scope.modal.remove();
      // });

      $scope.$on('modal.hidden', function() {
        currentSeeker = {};
        $state.go('app.search', {needs:needs});
      });

    }
    else {
      $state.go('app.search', {needs:needs});
    }

    // Awkwardness: prep the param, then go to the page
    //$rootScope.$emit('updateSearchParams', needs);

  }
});
