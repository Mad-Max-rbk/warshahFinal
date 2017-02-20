 angular.module('myapp.TradeworkerContr',[])

.controller('TradeworkerContr',function ($scope,$http,$location,Tradeworker){
	$scope.tradeworker = {};
	$scope.allTradeWorker = {};

	$scope.getAllTradeworker = function(){
		Tradeworker.getAll()
		.then(function (data) {
			$scope.allTradeWorker = data;
			console.log(data)
		})
		.catch(function (error) {
			console.log(error);
		})
	}

	$scope.addhandworker = function(){
		Tradeworker.insert($scope.tradeworker)
		.then(function (data) {
		    $scope.allTradeWorker = data;
			console.log(data);
		})
		.catch(function (error) {
			console.log(error);
		})
	}

})