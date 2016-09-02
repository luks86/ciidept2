(function () {
  'use strict';


  function config ($routeProvider, $locationProvider) {
   
 $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/noticias', {
        templateUrl: 'templates/listado-noticias.tpl.html', 
        controller: 'HomeCtrl'
      })

      .when('/noticias/:id', {
        templateUrl: 'templates/listado-noticias-id.tpl.html',
        controller: 'HomeCtrl'
        /*controllerAs: 'id_noti'*/

      })

      .when('/proyectos', {
        templateUrl: 'templates/listado-proyectos.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/proyectos/:id', {
        templateUrl: 'templates/listado-proyectos-id.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/enlaces', {
        templateUrl: 'templates/listado-enlaces.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/plano-ciidept', {
        templateUrl: 'templates/plano-ciidept.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/agenda', {
        templateUrl: 'templates/listado-agenda.tpl.html',
        controller: 'AgendaCtrl'
      })

      .when('/agenda/:id', {
        templateUrl: 'templates/listado-agenda-id.tpl.html',
        controller: 'AgendaCtrl'
      })

      .when('/agenda-hoy', {
        templateUrl: 'templates/listado-agenda-hoy.tpl.html',
        controller: 'AgendaCtrl'
      })


      .when('/agenda/top/:id', {
        templateUrl: 'templates/listado-agenda-N.tpl.html',
        controller: 'AgendaCtrl'
      })

      .when('/reservas', {
        templateUrl: 'templates/reservas.tpl.html',
        controller: 'FormularioCtrl'
      })

      .otherwise({ reditrectTo : '/' });

  } 
  
  angular   
      .module('ciidept', ['ngRoute','ciidept.controllers','ciidept.filters','ciidept.templates','ui.bootstrap', 'ui.bootstrap.datepicker', 'ui.bootstrap.carousel' , 'ngSanitize','angularVideoBg','ngAnimate','ngTouch'])
      .config(config);

   

})();

