 angular.module('myapp.TradeworkerContr',[])

.controller('TradeworkerContr',function ($scope,Tradeworker,$location,$window){
	$scope.data={};

if(window.localStorage.getItem('userId')){
     var userID = window.localStorage.getItem('userId');
     $scope.data.userId=userID;
   }
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
   
  }
	  $scope.addservice = function () {
      console.log($scope.data)
     setTimeout(function(){

Tradeworker.insert($scope.data)
    .then(function (serv) {
        console.log(serv)
        
        console.log($scope.data)
        $location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });

      }, 1000);
  	
  }
  $scope.all={};
  $scope.getAllTradeworker = function(){
    Tradeworker.getAll()
    .then(function (data) {
     return $scope.all = data;
      // console.log(data)
    })
    .catch(function (error) {
        console.log(error);
      });
  }

});