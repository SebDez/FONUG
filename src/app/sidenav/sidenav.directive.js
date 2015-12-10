export function SidenavDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/sidenav/sidenav.html',
        controller: 'SidenavController',
        controllerAs: 'sidenav'
    };

    return directive;
}