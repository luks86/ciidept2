(function () {
  'use strict';

/*********************/
  angular
    .module('ciidept.services', ['ngResource'])
/*    .constant('BaseUrl', 'http://www.ciidept.edu.ar/api')
*/    /*.constant('BaseUrl', 'http://localhost/laravelproyect/public/api')*/
    .constant('BaseUrl', 'http://www.ciidept.edu.ar/api_ciidept/public/api')
    .constant('BaseUrl2', 'http://agenda.innovacioneducativa.gob.ar/api/v1')
    .factory('AgendaCiidept', AgendaCiidept)
    .factory('AgendaCiideptHoy', AgendaCiideptHoy)
    .factory('AgendaCiideptN', AgendaCiideptN)    
    .factory('AgendaCiideptId', AgendaCiideptId)
    .factory('NoticiasCiidept', NoticiasCiidept)
    .factory('ProyectosCiidept', ProyectosCiidept)
    .factory('ProyectoCiidept', ProyectoCiidept)
    .factory('ImagenesNoticias', ImagenesNoticias)
    .factory('EnlacesCiidept', EnlacesCiidept)
    .factory('NoticiaCiidept', NoticiaCiidept);
    /*.factory('ReservasCiidept', ReservasCiidept);*/

function AgendaCiidept($resource, BaseUrl2)
  {
    return $resource(BaseUrl2 + '/agenda', {},{'query': {method: 'GET', isArray: true }});
  }

 function AgendaCiideptHoy($resource, BaseUrl2)
  {

    return $resource(BaseUrl2 + '/agenda/hoy', {},{'query': {method: 'GET', isArray: true }});

/*    return $resource(BaseUrl2 + '/agenda/hoy', {}, {method: 'GET', isArray: false });
*/  }

  function AgendaCiideptN($resource, BaseUrl2)
  {
    return $resource(BaseUrl2 + '/agenda/top/:id', {id: '@_id'}, {});
  }

  function AgendaCiideptId($resource, BaseUrl2)
  {
    return $resource(BaseUrl2 + '/agenda/:N', {N: '@_id'},{'query': {method: 'GET', isArray: true }});
  }  

  function NoticiasCiidept($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/noticias', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

 function NoticiaCiidept($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/noticias/:id', {id: '@_id'},{'query': {method: 'GET', isArray: true }});
  }

   function ImagenesNoticias($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/imagenes', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

    function ProyectosCiidept($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/proyectos', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

  function ProyectoCiidept($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/proyectos/:id', {id: '@_id'},{'query': { method: 'GET', isArray: true }}); 
    //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
  }

   function EnlacesCiidept($resource, BaseUrl)
  {
    return $resource(BaseUrl + '/enlaces', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'GET', isArray: true }
    });
  }

 /* function ReservasCiidept($resource, BaseUrl2)
  {
    return $resource(BaseUrl2 + '/reservar', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: 'POST', isArray: true }
    });
  }
*/


 /*  function AgendaCiidept($resource, BaseUrl2)
  {
    return $resource(BaseUrl2 + '/login', //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { 
          save:{
          method: "POST",
          headers : {"Content-Type": "application/x-www-form-urlencoded"}, 
          transformRequest: function(data) {
              return $httpParamSerializerJQLike(data);
          }
        }
          get: { method: 'POST', isArray: true }
    });
  }*/
})();
