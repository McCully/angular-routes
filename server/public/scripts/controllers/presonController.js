myApp.controller('PrestonController', ['$scope', function($scope) {
  console.log('preston controller running');
  $scope.message = "Preston Garvey is a Fallout 4 character who pesters the player constantly";
  $scope.img = true;
  $scope.imgg = true;
  $scope.showImg = function() {
    $scope.img = $scope.img === false ? true: false;
  }
  $scope.showImgg = function() {
    $scope.imgg = $scope.imgg === false ? true: false;
  }
}]);
