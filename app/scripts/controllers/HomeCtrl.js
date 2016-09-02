(function () {
  'use strict';

  angular
    .module('ciidept.controllers')
    .controller('HomeCtrl',HomeCtrl)
	
	.controller('fechaController', function ($scope) {
     
     $scope.CurrentDate = new Date();
	});



		  
		 	function HomeCtrl($scope, NoticiasCiidept, 
		                    ImagenesNoticias, ProyectosCiidept, ProyectoCiidept, EnlacesCiidept, NoticiaCiidept, $routeParams, $http){


		    $scope.template = {'nav': 'templates/menu-nav-ciidept.tpl.html'};

		    $scope.noticia = NoticiasCiidept.query();
		          
		          $scope.noticia.$promise.then(function(res){
		          $scope.noticias = res;
		        });

		    $scope.imagen = ImagenesNoticias.query();
		          
		          $scope.imagen.$promise.then(function(res){
		          $scope.imagenes = res;
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
		        });

		    $scope.id=$routeParams.id;
		    $scope.idproyecto=ProyectoCiidept.query({ id: $scope.id });
		        
		          $scope.idproyecto.$promise.then(function(res){
		        
		          $scope.idproyectos= res;
		        
		        });

		    $scope.id=$routeParams.id;
		    $scope.idnoticia=NoticiaCiidept.query({ id: $scope.id });
		        
		          $scope.idnoticia.$promise.then(function(res){
		        
		          $scope.idnoticias= res;
        });	 
}


})();