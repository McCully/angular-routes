var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/partials/home.html',
      controller: "HomeController"
    })
    .when('/preston', {
      templateUrl: '/views/partials/preston.html',
      controller: "PrestonController"
    })
    .when('/roman' ,{
      templateUrl: '/views/partials/roman.html',
      controller: "RomanController"
    })
    .when('/something',{
      templateUrl: "/views/partials/something.html",
      controller: "SomethingController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
