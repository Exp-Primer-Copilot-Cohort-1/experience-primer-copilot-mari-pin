function skillMembers() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skill-members.html',
    controller: 'SkillMembersCtrl',
    controllerAs: 'skillMembers',
    bindToController: true,
    scope: {
      skill: '=',
      members: '='
    }
  };
}