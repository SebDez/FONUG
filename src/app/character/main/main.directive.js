export function MainDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/character/main/main.dir.html',
        controller: 'MainDirectiveController',
        controllerAs: 'main',
        scope: {
          character: '='
        }
    };

    return directive;
}