(function () {
  'use strict';

  angular
    .module('ciidept.controllers', ['ciidept.services','ngLocale'])
    .controller('HomeCtrl',  HomeCtrl)
    .controller('EventoCtrl',  EventoCtrl);
    
angular
  .module('wizard.controllers', [])
  .controller('WizardCtrl',  WizardCtrl);

  function WizardCtrl($scope,$http) {

  $scope.template = {'nav': 'templates/menu-nav.tpl.html',
                    'step1': 'templates/listado-eventos.tpl.html',
                    'step2': 'templates/detalles.tpl.html',
                    'step3': 'templates/plan-pagos.tpl.html',
                    'step4': 'templates/inscripcion.tpl.html'};
  }

  function HomeCtrl($scope, Eventos, EventosxDia, NoticiasCiidept, ImagenesNoticias, ProyectosCiidept, EnlacesCiidept, ReservasCiidept, $http){

    $scope.dia=EventosxDia.query();
          
          $scope.dia.$promise.then(function(res){
          $scope.dias = res;
          console.log($scope.dias.length);

        });

		$scope.eventos1 = Eventos.query();
          $scope.eventos1.$promise.then(function(res){
          $scope.eventos = res;
          console.log($scope.eventos);
        });

    $scope.noticia = NoticiasCiidept.query();
          
          $scope.noticia.$promise.then(function(res){
          $scope.noticias = res;
          console.log($scope.noticias);
        });

    $scope.imagen = ImagenesNoticias.query();
          
          $scope.imagen.$promise.then(function(res){
          $scope.imagenes = res;
          console.log($scope.imagenes);
        });

    $scope.proyecto = ProyectosCiidept.query();
          
          $scope.proyecto.$promise.then(function(res){
          $scope.proyectos = res;
          console.log($scope.proyectos);
        });

    $scope.enlace = EnlacesCiidept.query();
          
          $scope.enlace.$promise.then(function(res){
          $scope.enlaces = res;
          console.log($scope.enlaces);
        });

    $scope.proyecto = ProyectosCiidept.query();
          
          $scope.proyecto.$promise.then(function(res){
          $scope.proyectos = res;
          console.log($scope.proyectos);
        });

    $scope.reserva = ReservasCiidept.query();
          
          $scope.reserva.$promise.then(function(res){
          $scope.reservas = res;
          console.log($scope.reservas);
        });
/*          console.log($scope.eventos1);
*/    
  }


angular.module('ui.bootstrap', ['ngAnimate', 'ui.bootstrap']);

angular
.module('ui.bootstrap')
.controller('DatepickerPopupDemoCtrl', function ($scope) {
  
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});

  function EventoCtrl($scope, $routeParams){
    $scope.id=$routeParams.id;
    console.log($scope.id);
  }
})();
 