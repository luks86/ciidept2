(function () {
  'use strict';

// Controlador
  function WizardCtrl($scope,$http) {

  $scope.template = {'nav': 'templates/menu-nav.tpl.html',
                    'step1': 'templates/listado.tpl.html',
                    'step2': 'templates/detalles.tpl.html',
                    'step3': 'templates/plan-pagos.tpl.html',
                    'step4': 'templates/inscripcion.tpl.html'};
 
    /*************LEER JSON************/
  
         $scope.propuestas = [];
          $http.get('propuestas.json')
            .then(function(res){
              $scope.propuestas = res.data.propuestas;
               console.log($scope.propuestas);

            }, function(res){
              $scope.propuestas = [{name: 'Error!! ' + res.status}];
            });
    /**********************************/

  // $scope.id = $routeParams.id - 1; //resto uno para que se corresponda con la posicion en el array
  // console.log('posicion del array: ' + $scope.id);
    /*************LEER JSON - POR OBJETO************/
  
         $scope.detalle = [];
          $http.get('propuestas.json')
            .then(function(res){
              $scope.detalle = res.data.propuestas;
               console.log($scope.detalle[0]);

            }, function(res){
              $scope.detalle = [{name: 'Error!! ' + res.status}];
            });
    /**********************************/

     /*************LEER JSON - Obtener usuario************/
  
         $scope.alumnos = [];
          $http.get('propuestas.json')
            .then(function(res){
              $scope.alumnos = res.data.alumnos;
               console.log($scope.alumnos[0]);

            }, function(res){
              $scope.alumnos = [{name: 'Error!! ' + res.status}];
            });
    /**********************************/



    /*****************SELECCIONAR SEDE********************/

    $scope.tuc = 'btn-warning';
    $scope.sierra = 'btn-default';

    $scope.ElegirSede = function(sede)
    {
        if(sede == 'tuc')
        {
           $scope.tuc = 'btn-warning';
    $scope.sierra = 'btn-default';
        }
        else
        {
           $scope.tuc = 'btn-default';
            $scope.sierra = 'btn-warning';
        }
    }

    /****************PAgos*******************/
  

  $scope.tab = {
    'listado':'sad',
    'detalle':'sad'
  };
  
      
      $scope.getDetalles = function(){

    // angular.element('listado').data('toggle','');
          $scope.tab = {
            'listado':'sdfds',
            'detalle':'sad'
          }
          console.log($scope.tab);
      }
     
      
   $scope.activeTab = 1,

    /***************************************/
   $scope.Tab = function(tab){
     
      $scope.activeTab = tab;
        console.log(tab);
     

   }

    /*********************************/
    $scope.hayfoto = false;
    $scope.user = {
      "nombre":'',
      "apellido": '',
      "correo":'',
      "tel":'',
      "dir":'',
      "localidad":'',
      "foto":''
    }
    
    $scope.getDatos = function(){

 if(13 == 13)
        {
         $scope.user = {
                      "nombre":'Raul',
                      "apellido": 'Diaz Solis',
                      "correo":'raul@gmail.com',
                      "tel":'4526',
                      "dir":'Savedra 129',
                      "localidad":'Tucumán',
                      "foto":'https://avatars3.githubusercontent.com/u/2073511?v=3&s=460'
                    };
                    $scope.hayfoto = true;
                  }
    }
}



  /***************************************************************/
  angular
    .module('wizard.controllers', [])
    .controller('WizardCtrl',  WizardCtrl);
})();
 