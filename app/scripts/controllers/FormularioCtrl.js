(function () {
  

  'use strict';


   angular
    .module('ciidept.controllers')
    .controller('FormularioCtrl', FormularioCtrl);




function FormularioCtrl($scope,$http, $log)
{
  
  'use strict';

  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.options = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.options.minDate = $scope.options.minDate ? null : new Date();
  };

  $scope.toggleMin();

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date(tomorrow);
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

    ////////////TIMER PICKER///////////////

 $scope.mytime = new Date();
  $scope.mytime2 = new Date();


  $scope.hstep = 1;
  $scope.mstep = 1;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;


  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
    $scope.mytime2 = null;
  };

  // Envio POST de los datos del formulario
  $scope.DatosLogeo = {email:'juan41285@gmail.com',password:'@piTIC2016'};

  
  // variables de los mensajes de envio exitoso o de fallo
  $scope.user = {};
  
  $scope.msj = true;

  $scope.msj_mal = false;
  
  $scope.msj_ok = false;
  
  $scope.msj_info = true;

  $scope.limpiarMsj = function(){
    $scope.user = {};
  
    $scope.msj = true;

    $scope.msj_mal = false;
  
    $scope.msj_ok = false;
    
    $scope.msj_info = false;
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
                var entrada = moment($scope.mytime); 
                var salida = moment($scope.mytime2); 

                console.log(aux.format('YYYY-MM-DD'));
                console.log(entrada.format('HH:mm'));
                console.log(salida.format('HH:mm'));
                /*console.log($scope.mytime);
                console.log($scope.mytime2);
*/

                $scope.user={
                                entrada:entrada.format('HH:mm'),
                                salida:salida.format('HH:mm'),
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
                      $scope.msj_info = true;
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