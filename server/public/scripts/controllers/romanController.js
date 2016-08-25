myApp.controller('RomanController', ['$scope', function($scope) {
  console.log('orders controller running');
  $scope.message = "Niko, its your cousin! Lets go bowling";
  $scope.gif = true;
  $scope.showGif = function(){
    $scope.gif = $scope.gif === false ? true: false;

  };
}]);
