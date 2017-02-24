 angular.module('myapp',[
 	'myapp.user',
	'myapp.TradeworkerContr',
	'myapp.services',
	'app.main',
	'app.profile',
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
	.when('/signout', {
      templateUrl: 'app/user/signout.html',
      controller: 'UserController'
    })
	.when('/tradeworker',{
		templateUrl:'app/tradeworker/tradeworker.html',
		controller:'TradeworkerContr'                 
	})
	.when('/showtradeworker',{
		templateUrl:'app/tradeworker/showworker.html',
		controller:'TradeworkerContr'                 
	})
	.when('/profile',{
		templateUrl:'app/profile/profile.html',
		controller:'ProfileController'                 
	})
	.when('/', {
		templateUrl:'app/main/main.html',
		controller:'MainController'
	})
	 .otherwise({redirectTo:'/'});

})