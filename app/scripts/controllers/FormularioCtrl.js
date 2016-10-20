(function () {
  

  'use strict';


   angular
    .module('ciidept.controllers')
    .controller('FormularioCtrl', FormularioCtrl);




function FormularioCtrl($scope,$http)
{
  
  'use strict';

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
 /*$scope.dt = new Date(day, month, year);*/

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




  $scope.DatosLogeo = {email:'juan41285@gmail.com',password:'@piTIC2016'};

  $scope.user = {};
  
  $scope.msj = true;

  $scope.msj_mal = false;
  
  $scope.msj_ok = false;
   
  $scope.limpiarMsj = function(){
    $scope.user = {};
  
    $scope.msj = true;

    $scope.msj_mal = false;
  
    $scope.msj_ok = false;
    }
  
 $scope.EnviarDatos = function(){
          
          $http({
                  method  : 'POST',
                  url     : 'http://agenda.innovacioneducativa.gob.ar/api/v1/login',
                  data    :/*{email: vm.email, password: vm.password}*/$.param($scope.DatosLogeo),  // pass in data as strings
                  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
              })

                .success(function(data){
             
                var aux =moment($scope.user.dt);
                
                console.log(aux.format('YYYY-MM-DD'));

                $scope.user={
                                entrada:$scope.user.entrada,  
                                salida:$scope.user.salida,
                                evento:$scope.user.evento,
                                organizador:$scope.user.organizador,
                                fecha:aux.format('YYYY/MM/DD'), 
                                apellidonombre:$scope.user.apellidonombre,
                                asistentes:$scope.user.asistentes,
                                catering:$scope.user.catering,
                                email:$scope.user.email,
                                telefono:$scope.user.telefono,
                                objetivos:$scope.user.objetivos,
                                destinatarios:$scope.user.destinatarios,
                                };

                    $http({
                      method  : 'POST',
                      url     : 'http://agenda.innovacioneducativa.gob.ar/api/v1/agenda?token='+ data.token,
                      data    :/*{email: vm.email, password: vm.password}*/$.param($scope.user),  // pass in data as strings
                      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                    })

                    .success(function(data){
                    console.log(data.success);

                    if (data.success == true) {
                    //si hubo error en la base de datos
                      $scope.user = {};
                      $scope.msj_ok = true;
                      $scope.msj = false;
                      $scope.msj_mal = false;
                    }
                    
                    })
                    .error(function (error, status){
                      console.log("No se envio nada"); 
                      
                      $scope.msj_ok = false;
                      $scope.msj = false;
                      $scope.msj_mal = true;
                    });  

            });
}
     
}

})();