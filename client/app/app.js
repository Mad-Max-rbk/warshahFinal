 angular.module('myapp',['myapp.UserController',
	'myapp.TradeworkerContr',
	'ngRoute',
	'myapp.services'
	])

.config(function($routeProvider){
	$routeProvider.when('/adduser',{
		templateUrl:'./user/signup.html',                   
		controller:'UserController'                  
	})
	.when('/addTradeworker',{
		templateUrl:'./tradworker/tradworker.html',
		controller:'TradeworkerContr'                 
	})
	.when('/getTradeworker',{
		templateUrl:'./tradworker/tradworker.html',
		controller:'TradeworkerContr'                 
	})
	.otherwise({
		redirectTo:'/'
	})
	
})