angular.module('app.profile', [])

.controller('ProfileController', function ($scope, $location, $window , User , Tradeworker) {
   $scope.data={};
   $scope.data.userId = window.localStorage.getItem('userId');
  	

   $scope.profile=[];
   if(window.localStorage.getItem('userId')){
     var userID = window.localStorage.getItem('userId');
   }

  	
 
  $scope.getProfile = function(){
    Tradeworker.getAll()
    .then(function (data) {
    	for (var i = 0; i < data.length; i++) {
    		if(data[i]['s_cid'] === userID){
      	 		 $scope.profile.push(data[i]);
      	 		console.log($scope.profile)
    		}
    	}
    })
    .catch(function (error) {
        console.log(error);
      });
  }

})