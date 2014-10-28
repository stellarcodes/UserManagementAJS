(function() {
	var app = angular.module("userManagement", [ 'ngRoute' ]);
	app.config(function($routeProvider) {
		$routeProvider.when('/login', {
			controller : 'LoginController',
			templateUrl : 'app/views/login.html'
		}).when('/signup', {
			controller : 'SignUpController',
			templateUrl : 'app/views/signup.html'
		}).when('/dash', {
			controller : 'DashBoardController',
			templateUrl : 'app/views/dashBoard.html'
		}).otherwise({
			redirectTo : '/login'
		});
	});
	
})();