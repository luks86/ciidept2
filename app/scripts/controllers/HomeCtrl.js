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

		       $scope.agenda=AgendaCiidept.get();
		          
		         $scope.agenda.$promise.then(function(res){
		         $scope.agendas = res.data;
		         console.log('la agenda con get en el servicio' + $scope.agendas);      
		        });

		    $scope.hoyagenda=AgendaCiideptHoy.get();
		         
		         $scope.hoyagenda.$promise.then(function(res){
		         $scope.hoyagendas = res.data;
	          	 
/*	          	 console.log($scope.hoyagendas);
*/
		        });

		    // $scope.id=$routeParams.id;
		    // $scope.idagenda=AgendaCiideptId.query({ id: $scope.id });
		        
		
		    //       $scope.idagenda.$promise.then(function(res){
		        
		    //       $scope.idagendas= res;
		        
		    //     });

			$scope.idTop=5; //se pasa el N por aqui
		    $scope.ultimosEventos=AgendaCiideptN.get({ id: $scope.idTop });
	        $scope.ultimosEventos.$promise.then(function(res){
	        $scope.ultimos= res.data;
	        console.log('Ultimos eventos para home: ' + $scope.ultimos);
	        });


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