angular.module('ciidept').controller('GalleryCtrl', function ($scope, Lightbox, ImagenesNoticias, $routeParams, $http) {
  
  $scope.id=$routeParams.id;
  $scope.image=ImagenesNoticias.query({ id: $scope.id });
  
  $scope.image.$promise.then(function(res){
                    
              $scope.images= res;
              
              console.log($scope.images);
              
        });
  
  $scope.openLightboxModal = function (index) {
      Lightbox.openModal($scope.images, index);
  };
/*    console.log($scope.images);
*/
  
});