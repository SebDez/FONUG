export function SocialDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/character/social/social.dir.html',
        controller: 'SocialDirectiveController',
        controllerAs: 'social',
        scope: {
          character: '='
        }
    };

    return directive;
}