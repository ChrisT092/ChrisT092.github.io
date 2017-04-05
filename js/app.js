var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
	  controller : "HomeController",
      templateUrl : "view/home.html" 
    })
	.when('/streamers/:id', {
		controller : "DescController",
		templateUrl : "view/streamDesc.html"
	})
    .otherwise({
      redirectTo: '/'
    });
});
