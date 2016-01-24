export function PersonalityDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/character/personality/personality.dir.html',
        controller: 'PersonalityDirectiveController',
        controllerAs: 'personality',
        scope: {
          character: '='
        }
    };

    return directive;
}