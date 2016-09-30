/*angular.module('ciidept').config(function (LightboxProvider) {
      
      LightboxProvider.getImageUrl = function (image) {
        return 'http://ciidept.edu.ar/uploads/image/' + image.getName();
      };

      LightboxProvider.getImageCaption = function (image) {
        return image.label;
      };
    });*/


angular.module('ciidept').controller('GalleryCtrl', function ($scope, Lightbox, ImagenesNoticias, $routeParams, $http) {
  

  /*$scope.images = [
    {
      'url': 'http://ciidept.edu.ar/uploads/image/{{noticia.name}}',
      'thumbUrl': 'img/1-expo2016.jpg' // used only for this example
    },
    {
      'url': 'img/2-expo2016.jpg',
      'thumbUrl': 'img/2-expo2016.jpg'
    },
    {
      'url': 'img/3-expo2016.jpg',
      'thumbUrl': 'img/3-expo2016.jpg'
    }
  ];*/

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