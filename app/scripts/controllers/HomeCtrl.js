(function () {
  'use strict';

  angular
    .module('ciidept.controllers')
    
    .controller('HomeCtrl',HomeCtrl)

   
	.controller('fechaController', function ($scope) {
     $scope.CurrentDate = new Date();
	});

		  function HomeCtrl($scope, AgendaCiidept, AgendaCiideptHoy, AgendaCiideptN, AgendaCiideptId, NoticiasCiidept, 
		                    ImagenesNoticias, ProyectosCiidept, ProyectoCiidept, EnlacesCiidept, NoticiaCiidept, $routeParams, $http){

/*		    function HomeCtrl($scope, NoticiasCiidept, ImagenesNoticias, ProyectosCiidept, ProyectoCiidept, EnlacesCiidept, NoticiaCiidept, $routeParams, $http){
*/
		    $scope.template = {'nav': 'templates/menu-nav-ciidept.tpl.html'};

		    $scope.agenda=AgendaCiidept.query();
		          
		         $scope.agenda.$promise.then(function(res){
		         $scope.agendas = res;
		          // console.log($scope.dias.length);

		        });

		    $scope.hoyagenda=AgendaCiideptHoy.query();
		          
		         $scope.hoyagenda.$promise.then(function(res){
		         $scope.hoyagendas = res;
		          // console.log($scope.dias.length);

		        });

		    $scope.id=$routeParams.id;
		    $scope.idagenda=AgendaCiideptId.query({ id: $scope.id });
		        
		
		          $scope.idagenda.$promise.then(function(res){
		        
		          $scope.idagendas= res;
		        
		        });

			$scope.id=$routeParams.id;
		    $scope.Nagenda=AgendaCiideptN.query({ id: $scope.id });
		        
		
		          $scope.Nagenda.$promise.then(function(res){
		        
		          $scope.Nagendas= res;
		        
		        });



				/*$scope.eventos1 = Eventos.query();
				console.log($scope.eventos1);
		          $scope.eventos1.$promise.then(function(res){
		          $scope.eventos = res;
		          
		        });*/

		    $scope.noticia = NoticiasCiidept.query();
		          
		          $scope.noticia.$promise.then(function(res){
		          $scope.noticias = res;
		          // console.log($scope.noticias);
		        });

		    $scope.imagen = ImagenesNoticias.query();
		          
		          $scope.imagen.$promise.then(function(res){
		          $scope.imagenes = res;
		          // console.log($scope.imagenes);
		        });

		    $scope.proyecto = ProyectosCiidept.query();
		          
		          $scope.proyecto.$promise.then(function(res){
		          $scope.proyectos = res;
		          // console.log($scope.proyectos);
		        });

		    $scope.enlace = EnlacesCiidept.query();
		          
		          $scope.enlace.$promise.then(function(res){
		          $scope.enlaces = res;
		          // console.log($scope.enlaces);
		        });

		    $scope.proyecto = ProyectosCiidept.query();
		          
		          $scope.proyecto.$promise.then(function(res){
		          $scope.proyectos = res;
		          // console.log($scope.proyectos);
		        });

		         //// Proyectos por id's/////
		    $scope.id=$routeParams.id;
		    $scope.idproyecto=ProyectoCiidept.query({ id: $scope.id });
		        
		/*        console.log('99' + $scope.Noticia);
		*/
		          $scope.idproyecto.$promise.then(function(res){
		        
		          $scope.idproyectos= res;
/*		         console.log('99' + res.body);
*/		        
		/*          console.log($scope.Noticias);
		*/        });

				//// FIN Proyectos por id's/////
				///
		    $scope.id=$routeParams.id;
		    $scope.idnoticia=NoticiaCiidept.query({ id: $scope.id });
		        
		/*        console.log('99' + $scope.Noticia);
		*/
		          $scope.idnoticia.$promise.then(function(res){
		        
		          $scope.idnoticias= res;
/*		         console.log('99' + res.body);
*/		        
		/*          console.log($scope.Noticias);
		*/        });
		    /*$scope.reserva = ReservasCiidept.query();
		          
		          $scope.reserva.$promise.then(function(res){
		          $scope.reservas = res;
		          console.log($scope.reservas);
		        });
		/*          console.log($scope.eventos1);*/
		 
		  }


})();