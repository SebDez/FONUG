export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('generated', {
      url: '/generated',
      templateUrl: 'app/character/character.html',
      controller: 'CharacterController',
      controllerAs: 'character',
      params: { 'currentCharacter': null }
    });

  $urlRouterProvider.otherwise('/');
}
