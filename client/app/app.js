 angular.module('myapp',[
 	'myapp.user',
	'myapp.TradeworkerContr',
	'myapp.services',
	'app.main',
	'ngRoute'
	])

.config(function($routeProvider){
	$routeProvider
	.when('/signup',{
		templateUrl:'app/user/signup.html',                   
		controller:'UserController'                  
	})
	.when('/login',{
		templateUrl:'app/user/login.html',
		controller:'UserController'                 
	})
	.when('/getTradeworker',{
		templateUrl:'app/tradworker/tradworker.html',
		controller:'TradeworkerContr'                 
	})
	.when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    })
	 .otherwise({redirectTo:'/'});
	 
})