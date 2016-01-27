export function HistoricDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/character/historic/historic.dir.html',
        controller: 'HistoricDirectiveController',
        controllerAs: 'historic',
        scope: {
          character: '='
        }
    };

    return directive;
}
