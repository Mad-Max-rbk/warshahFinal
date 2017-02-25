 angular.module('myapp.user',[])

.controller('UserController',function ($scope , $http , $location , $window , User){
	$scope.user = {};

  if($window.localStorage.getItem("com.book")) {
        $location.path('/');
      }

	$scope.signin = function () {
    var passFlag = $scope.user.password;
    var userFlag = $scope.user.username;
    if(userFlag && passFlag){
      User.signin($scope.user)
      .then(function (data) {
          
       
        $window.localStorage.setItem('com.book', data.token);
        $window.localStorage.setItem('user.book', $scope.user.username);
        $window.localStorage.setItem('userId',data['user']['_id']);
		$window.localStorage.setItem('Cimg',data['user']['c_img']);
		$window.localStorage.setItem('Uname',data['user']['c_name']);
        if($window.localStorage.setItem('userId',data['user']['_id'])!==null){
           $location.path('/profile');
		   $window.location.reload();
        }else{
         //$window.location.reload();
         $location.path('/');
        }
       
       
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      if(!userFlag && !passFlag){
        $scope.msg = "Wrong input for user or Password  "
      } else if(!userFlag){
        $scope.msg = "please inter your username"
      } else if (!passFlag){
        $scope.msg = "please inter your password"
      }
    }
  }


  $scope.signup = function () {
    var passFlag = $scope.user.password;
    var userFlag = $scope.user.username;
    if(userFlag && passFlag){
		console.log($scope.user)
      User.signup($scope.user)
      .then(function (token) {
        //console.log(token)
        
        
       
		$location.path('/login');
		
      })
      .catch(function (error) {
        console.error(error);
      });
	  
    } else {
      if(!userFlag && !passFlag){
       $scope.msg = "Wrong input for user or Password"
     } else if(!userFlag){
      $scope.msg = "please inter all fild"
    } else if (!passFlag){
      $scope.msg = "please inter all fild"
    }
  }
}

$scope.signout = function(){
  User.signout();
}

})

   

