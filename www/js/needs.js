angular.module('starter.controllers').controller('NeedsCtrl', function($scope, $state) {
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
  $scope.toggleGroup = function(group) {
    group.active = !group.active;
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  $scope.gotoSearch = function(){
    $state.go('app.search');
  }
});
