import {config}from './index.config';
import {routerConfig}from './index.route';
import {runBlock}from './index.run';
import {MainController}from './main/main.controller.js'
import {NavbarDirective}from './navbar/navbar.directive';
import {NavbarController}from './navbar/navbar.controller';

angular.module('fonug', ['ngAnimate', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap', 'toastr', 'pascalprecht.translate'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .controller('NavbarController', NavbarController)
    .directive('navbar', NavbarDirective)