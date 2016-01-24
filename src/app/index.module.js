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
import {InputController}from './inputhelper/input.controller.js';
import {ProgressBarController}from './progressbar/progressbar.controller';
import {ProgressBarDirective}from './progressbar/progressbar.directive.js';
import {SocialDirective}from './character/social/social.directive';
import {SocialDirectiveController}from './character/social/social.dir.controller';
import {AppearanceDirective}from './character/appearance/appearance.directive';
import {AppearanceDirectiveController}from './character/appearance/appearance.dir.controller';
import {PersonalityDirective}from './character/personality/personality.directive';
import {PersonalityDirectiveController}from './character/personality/personality.dir.controller';
import {PhysicalDirective}from './character/physical/physical.directive';
import {PhysicalDirectiveController}from './character/physical/physical.dir.controller';
import {MainDirective}from './character/main/main.directive';
import {MainDirectiveController}from './character/main/main.dir.controller';


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
    .controller('InputController', InputController)
    .directive('progressbarfonug', ProgressBarDirective)
    .controller('ProgressBarController', ProgressBarController)
    .directive('social', SocialDirective)
    .controller('SocialDirectiveController', SocialDirectiveController)
    .directive('appearance', AppearanceDirective)
    .controller('AppearanceDirectiveController', AppearanceDirectiveController)
    .directive('personality', PersonalityDirective)
    .controller('PersonalityDirectiveController', PersonalityDirectiveController)
    .directive('physical', PhysicalDirective)
    .controller('PhysicalDirectiveController', PhysicalDirectiveController)
    .directive('main', MainDirective)
    .controller('MainDirectiveController', MainDirectiveController)
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
