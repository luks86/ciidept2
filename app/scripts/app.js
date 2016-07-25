(function () {
  'use strict';



 
  function config ($routeProvider) {
   
    $routeProvider
      .when('/listado', {
        templateUrl: 'templates/listado.tpl.html',
        controller: 'WizardCtrl'
      })
       .when('/detalle', {
        templateUrl: 'templates/detalles.tpl.html',
        controller: 'WizardCtrl'
      })
      .when('/inversion', {
        templateUrl: 'templates/plan-pagos.tpl.html',
        controller: 'WizardCtrl'
      })
         .when('/alumno', {
        templateUrl: 'templates/inscripcion.tpl.html',
        controller: 'WizardCtrl'
      })
  
     
     

      .otherwise({ reditrectTo : '/listado' });

  } 



  angular
    .module('wizard', ['ngRoute','wizard.controllers','ui.bootstrap'])
    .config(config);

   

})();

