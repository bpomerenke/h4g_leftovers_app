angular.module('starter.controllers').controller('NeedsCtrl', function($scope) {
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
});