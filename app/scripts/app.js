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

       /*.when('/nav', {
        templateUrl: 'templates/menu-nav-ciidept.tpl.html',
        controller: 'HomeCtrl'
      })*/
      
      .when('/reservas', {
        templateUrl: 'templates/reservas.tpl.html',
        controller: 'ReservasCtrl'
      })




      .otherwise({ reditrectTo : '/' });

  } 

  angular
/*    .module('ciidept', ['ngRoute','ciidept.controllers','ui.bootstrap', 'ngSanitize','angularVideoBg','ui-bootstrap','angular-animate','angular-touch'])
*/    
      .module('ciidept', ['ngRoute','ciidept.controllers','ciidept.templates','ciidept.templates','ui.bootstrap', 'ngSanitize','angularVideoBg','ngAnimate','ngTouch'])
      .config(config);

   

})();

