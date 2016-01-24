export function AppearanceDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/character/appearance/appearance.dir.html',
        controller: 'AppearanceDirectiveController',
        controllerAs: 'appearance',
        scope: {
          character: '='
        }
    };

    return directive;
}