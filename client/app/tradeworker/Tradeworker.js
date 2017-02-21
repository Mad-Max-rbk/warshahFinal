 angular.module('myapp.TradeworkerContr',[])

.controller('TradeworkerContr',function ($scope,Tradeworker,$location){
	$scope.data={};
	  $scope.addservice = function () {
  	Tradeworker.insert($scope.data)
  	.then(function (serv) {
        console.log(serv)
        $location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  $scope.getAllTradeworker = function(){
    Tradeworker.getAll()
    .then(function (data) {
      $scope.data = data;
      console.log(data)
    })
    .catch(function (error) {
        console.log(error);
      });
  }

});