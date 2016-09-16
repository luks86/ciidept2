/*(function () {
  'use strict';


   angular
    .module('portal.controllers')
    .controller('ContactoCtrl', ContactoCtrl);


function ContactoCtrl($scope, $http)
{
  
  $scope.mensaje = true;
  $scope.mnsaje = true;


  //enviar suscripcion
  $scope.sData = {};
  $scope.alta_nuevo = true;
  $scope.alta_mal = false;
  $scope.alta_ok = false;
  $scope.alta_repe = false;
  $scope.sinRobot = false;
  
    // console.log("hola"+$scope.areas);

      // enviar form
      $scope.Suscribir = function() {
       $scope.alta_nuevo = false;

        $http({
              method  : 'POST',
              url     : 'http://innovacioneducativa.gob.ar/Pagina/suscribir.php',
              data    : $.param($scope.sData),  // pass in data as strings
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
          })
              .success(function(data) {
                 console.log(data);
                  if (data.resultado == 1) {
                    //si hubo error en la base de datos
                      $scope.sData = {};
                      $scope.alta_nuevo = false;
                      $scope.alta_mal = true;

                   

                  }
                  if (data.resultado == 2) {
                    //si el mail esta repetido
                      $scope.sData = {};
                      $scope.alta_nuevo = false;
                      $scope.alta_repe = true;

                   

                  }
                  if (data.resultado == 3) {
                    //si se agrego correctamente
                      $scope.sData = {};
                      $scope.alta_nuevo = false;
                      $scope.alta_ok = true;

                   

                  }

              });
      };
    //fin de enviar
    $scope.limpiar = function()
    {
      $scope.sData = {};
      $scope.alta_nuevo = true;
      $scope.alta_mal = false;
      $scope.alta_ok = false;
      $scope.alta_repe = false;

    }

 $scope.limpiarMsj = function()
    {
      $scope.mData = {};
      $scope.msj = true;
      $scope.msj_mal = false;
      $scope.msj_ok = false;
      
      $scope.mData.destino = {};
    }
     
  //fin del form de suscripcion

  //Form para enviar mensaje
   $scope.mData = {};
   $scope.msj_ok = false;
   $scope.msj = true;
   $scope.msj_mal = false;
   $scope.enviar = false;
   $scope.destinatarios = [

    {text1: 'Coordinación Provincial TIC', correo:"coordinaciontictucuman@gmail.com", estado:false},
    {text1: 'Aula Modelo Tucumán', correo:"aulamodelotucuman@gmail.com", estado:false},
    {text1: 'Conectar Igualdad Tucumán', correo:"conectarigualdadtucuman@gmail.com", estado:false},
    {text1: 'Desarrollo Profesional', correo:"desarrolloprofesional@tictucuman.net", estado:false}
]
 $scope.checkN1 = function(correo){
  
 
$scope.mData.destino = correo;
   $scope.enviar = true;
   

 }
      // enviar form
      $scope.enviarMensaje = function() {
       $scope.alta_nuevo = false;

        $http({
              method  : 'POST',
              url     : 'http://innovacioneducativa.gob.ar/Pagina/admin/emails/mensaje_contacto.php',
              data    : $.param($scope.mData),  
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
          })
              .success(function(data) {
                 console.log(data);
                  if (data.resultado == true) {
                    //si hubo error en la base de datos
                      $scope.mData = {};
                      $scope.msj_ok = true;
                      $scope.msj = false;
                      $scope.msj_mal = false;
                  }
                  else
                  {
                      $scope.mData = {};
                      $scope.msj_ok = false;
                      $scope.msj = false;
                      $scope.msj_mal = true;

                  }
                  

              });
      };
    //fin de enviar
  //Fin del forma para enviar mensajes
}

})();
*/



(function () {
  

  'use strict';


   angular
    .module('ciidept.controllers')
    .controller('FormularioCtrl', FormularioCtrl);




function FormularioCtrl($scope, $http)
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

  
 $scope.EnviarDatos = function(){
          
          $http({
                  method  : 'POST',
                  url     : 'http://agenda.innovacioneducativa.gob.ar/api/v1/login',
                  data    :/*{email: vm.email, password: vm.password}*/$.param($scope.DatosLogeo),  // pass in data as strings
                  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
              })

                .success(function(data){
/*                console.log(data);
*//*                $scope.user={fecha:$scope.dt}

*/                
                /*console.log($scope.dt);*/
                console.log($scope.user.fecha);

                $scope.user={
                                entrada:$scope.user.entrada,  
                                salida:$scope.user.salida,
                                evento:$scope.user.evento,
                                organizador:$scope.user.organizador,
                                fecha:$scope.user.dt, 
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
                    console.log(data);

                    });  
            });
}
     
      
     
}

})();