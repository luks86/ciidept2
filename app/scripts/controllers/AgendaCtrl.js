(function () {
  'use strict';

  angular
    .module('ciidept.controllers')
    .controller('AgendaCtrl', AgendaCtrl);
	

		  
		 	function AgendaCtrl($scope, AgendaCiidept, AgendaCiideptHoy, AgendaCiideptN, AgendaCiideptId, $routeParams, $http){

		       $scope.agenda=AgendaCiidept.get();
		          
		         $scope.agenda.$promise.then(function(res){
		         $scope.agendas = res.data;
/*		         console.log('la agenda con get en el servicio' + $scope.agendas);      
*/		        });

		    $scope.hoyagenda=AgendaCiideptHoy.get();
		         
		         $scope.hoyagenda.$promise.then(function(res){
		         $scope.hoyagendas = res.data;
	          	 
/*	          	 console.log($scope.hoyagendas);
*/
		        });

			$scope.idTop=10; //se pasa el N por aqui
		    $scope.ultimosEventos=AgendaCiideptN.get({ id: $scope.idTop });
	        $scope.ultimosEventos.$promise.then(function(res){
	        $scope.ultimos = res.data;
/*	        console.log('Ultimos eventos para home: ' + $scope.ultimos);
*/	        });
		  }


})();