angular
.module('ciidept.controllers')
.controller('FormularioCtrl', function ($scope, $http) {
  'use strict';
    $scope.useremail ="juan41285@gmail.com";
    $scope.password ="@piTIC2016";


       $http({
            method :'POST',
            url:'http://agenda.innovacioneducativa.gob.ar/api/v1/login',
            data: { username :  $scope.useremail , password: $scope.password},
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            console.log('status',status);
            console.log('data',status);
            console.log('headers',status);
        });
   
});
