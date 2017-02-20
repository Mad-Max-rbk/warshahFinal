 angular.module('myapp.user',[])

.controller('UserController',function ($scope,$http,$location,$window,User){
	$scope.user = {};
	$scope.signin = function () {
    var passFlag = $scope.user.password;
    var userFlag = $scope.user.username;
    if(userFlag && passFlag){
      User.signin($scope.user)
      .then(function (data) {
        console.log(data)
        $window.localStorage.setItem('com.book', data.token);
        $window.localStorage.setItem('user.book', $scope.user.username);
        
        // if(data.user.type){
        //   $window.localStorage.setItem('user.type', data.user.type);  
        // }

        //  if(data.user.type === 'admin'){
        //      $location.path('/books/add');
        //  }else {
        //       $location.path('/');
        //  }
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
        $window.localStorage.setItem('com.book', token);
        $window.localStorage.setItem('user.book', $scope.user.username);
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
// 	 $scope.ifuser=true;

// 	$scope.signin = function ($scope.user) {
// 		User.signin($scope.user)
// 		.then(function (data) {
// 			$scope.ifuser=false;
// 			$location.path('/');
// 			$window.location.reload();
// 		})
// 		.catch(function (error) {
// 			console.log(error);
// 			$scope.ifuser=false;
// 			$scope.username="";
// 			$scope.password="";
// 		})
// 	}

//  	$scope.signup = function (newUser) {
//         newUser.username = $scope.username;
//         User.signup(newUser)
//         .then(function (user) {
//             $scope.signin({
//                 username:newUser.username,
//                 password:newUser.password
//             });
//         })
//         .catch(function (error) {
//         	console.log(error);
//             console.log("user already exist");
//         })
//     }
// })


   



	    