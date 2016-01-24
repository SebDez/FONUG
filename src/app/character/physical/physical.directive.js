export function PhysicalDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/character/physical/physical.dir.html',
        controller: 'PhysicalDirectiveController',
        controllerAs: 'physical',
        scope: {
          character: '='
        }
    };

    return directive;
}