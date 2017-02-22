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
<<<<<<< HEAD
        console.log(data)
=======
        console.log($scope.user.username)
        // console.log(data)
        //console.log(data.user._id)
>>>>>>> 0bd929d6c790598d03c17a3159a80ad54621811f
        $window.localStorage.setItem('com.book', data.token);
        $window.localStorage.setItem('user.book', $scope.user.username);
        $location.path('/');
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
      User.signup($scope.user)
      .then(function (token) {
        console.log(token)
        $window.localStorage.setItem('com.book', token);
        $window.localStorage.setItem('user.book', $scope.user.username);
<<<<<<< HEAD
=======
         // $window.localStorage.setItem('userId', token.user._id);
>>>>>>> 0bd929d6c790598d03c17a3159a80ad54621811f
        $location.path('/');
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

   



	    
