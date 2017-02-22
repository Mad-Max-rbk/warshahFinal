angular.module('app.profile', [])

.controller('ProfileController', function ($scope, $location, $window , User , Tradeworker) {
   $scope.data={};
   var userID = window.localStorage.getItem('userId');
  	

  $scope.getProfile = function(){
    Tradeworker.getAll()
    .then(function (data) {
    	for (var i = 0; i < data.length; i++) {
    		if(data[i]['s_cid'] === userID){
      	 		$scope.data = [data[i]];
      	 		console.log($scope.data)
    		}
    	}
    })
    .catch(function (error) {
        console.log(error);
      });
  }

})