(function () {
  'use strict';


  function config ($routeProvider, $locationProvider) {
   
 $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/evento/:id', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'EventoCtrl'
      })

      .when('/eventos', {
        templateUrl: 'templates/listado-eventos.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/noticias', {
        templateUrl: 'templates/listado-noticias.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/proyectos', {
        templateUrl: 'templates/listado-proyectos.tpl.html',
        controller: 'HomeCtrl'
      })

      .when('/enlaces', {
        templateUrl: 'templates/listado-enlaces.tpl.html',
        controller: 'HomeCtrl'
      })
      
      .when('/reservas', {
        templateUrl: 'templates/reservas.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'postformulario'

      })

      .otherwise({ reditrectTo : '/' });

  } 

  angular
    .module('ciidept', ['ngRoute','ciidept.controllers','ui.bootstrap', 'ngSanitize','angularVideoBg'])
    .config(config);

   

})();

