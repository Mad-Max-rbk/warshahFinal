 angular.module('myapp.TradeworkerContr',[])

.controller('TradeworkerContr',function ($scope,Tradeworker,$location){
	$scope.data={};

  $scope.upload=function(element){
   var file=element[0];
   console.log(file)
    var reader = new FileReader();
   reader.addEventListener("load", function () {
    $scope.data.img = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
   console.log($scope.data)
  }
	  $scope.addservice = function () {
     setTimeout(function(){

Tradeworker.insert($scope.data)
    .then(function (serv) {
        console.log(serv)
        $location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });

      }, 1000);
  	
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