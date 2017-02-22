angular.module('app.profile', [])

.controller('ProfileController', function ($scope, $location, $window , User , Tradeworker) {
   $scope.data={};
   $scope.data.userId = window.localStorage.getItem('userId');
  	

})