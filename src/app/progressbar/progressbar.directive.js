export function ProgressBarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/progressbar/progressbar.html',
        controller: 'ProgressBarController',
        controllerAs: 'progressbar',
        scope: {
            percentage: '=',
            label:'=',
            theme:'='
        }
    };

    return directive;
}