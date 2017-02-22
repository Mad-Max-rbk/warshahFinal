 angular.module('myapp.TradeworkerContr',[])

.controller('TradeworkerContr',function ($scope,Tradeworker,$location){
	$scope.data={};
$scope.data.userId = window.localStorage.getItem('userId');
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
<<<<<<< HEAD
=======
        
        console.log($scope.data)
>>>>>>> 0bd929d6c790598d03c17a3159a80ad54621811f
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