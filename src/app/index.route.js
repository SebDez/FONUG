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
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    });


  $urlRouterProvider.otherwise('/');
}
