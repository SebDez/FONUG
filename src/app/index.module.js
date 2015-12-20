/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import {MainController}from './main/main.controller.js';
import {NavbarDirective}from './navbar/navbar.directive';
import {NavbarController}from './navbar/navbar.controller';
import {GeneratorService}from './main/main.generator.service';
import {LocalDataFactory}from './main/main.localdata.factory';
import {CharacterController}from './character/character.controller.js';
import {SidenavController}from './sidenav/sidenav.controller';
import {SidenavDirective}from './sidenav/sidenav.directive.js';
import {AboutController}from './about/about.controller.js';
import {ContactController}from './contact/contact.controller.js';

angular.module('fonug', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'pascalprecht.translate','ngMaterial','wyvernzora.un-svg'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
.controller('MainController', MainController)
.controller('NavbarController', NavbarController)
    .directive('navbar', NavbarDirective)
    .service('GeneratorService', GeneratorService)
    .factory('LocalDataFactory', () => {return new LocalDataFactory()})
    .controller('CharacterController', CharacterController)
    .directive('sidenav', SidenavDirective)
    .controller('SidenavController', SidenavController)
    .controller('AboutController', AboutController)
    .controller('ContactController', ContactController)
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('lawfulGoodTheme').primaryPalette('blue');
        $mdThemingProvider.theme('neutralGoodTheme').primaryPalette('cyan');
        $mdThemingProvider.theme('chaoticGoodTheme').primaryPalette('teal');
        $mdThemingProvider.theme('lawfulNeutralTheme').primaryPalette('purple');
        $mdThemingProvider.theme('trueNeutralTheme').primaryPalette('amber');
        $mdThemingProvider.theme('chaoticNeutralTheme').primaryPalette('deep-purple');
        $mdThemingProvider.theme('lawfulEvilTheme').primaryPalette('red');
        $mdThemingProvider.theme('neutralEvilTheme').primaryPalette('pink');
        $mdThemingProvider.theme('chaoticEvilTheme').primaryPalette('deep-orange');
    });
