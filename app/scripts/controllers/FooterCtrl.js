(function () {
  'use strict';

  angular
    .module('ciidept.controllers')
    .controller('FooterCtrl',FooterCtrl);

		  function FooterCtrl($scope){

		    $scope.template = {'footer': 'templates/footer.tpl.html'};

		    
		  }
})();