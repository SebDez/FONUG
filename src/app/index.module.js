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

angular.module('fonug', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'pascalprecht.translate','ngMaterial'])
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
    .controller('CharacterController', CharacterController);
