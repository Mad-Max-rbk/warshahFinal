angular.module('app.profile', [])

.controller('ProfileController', function ($scope, $location, $window , User , Tradeworker) {
   $scope.data={};
  // $scope.data.userId = window.localStorage.getItem('userId');
  	// if(!$window.localStorage.getItem("com.book")) {
   //      $location.path('/');
   //    }

   $scope.profile=[];
   if(window.localStorage.getItem('userId')){
     var userID = window.localStorage.getItem('userId');
     $scope.data.userId=userID;
   }

  	
 
  $scope.getProfile = function(){
    console.log($scope.data.userId)
    Tradeworker.getAll()
    .then(function (data) {
    	for (var i = 0; i < data.length; i++) {
    		if(data[i]['s_cid'] === $scope.data.userId){
      	 		 $scope.profile.push(data[i]);
      	 		console.log($scope.profile)
    		}
    	}
      return $scope.profile
    })
    .catch(function (error) {
        console.log(error);
      });
  }
//// handle update services
$scope.oneserveice={};
$scope.openserv=function(id){
for (var i =0;i<$scope.profile.length; i++) {
 if($scope.profile[i]['_id']===id){
  $scope.oneserveice=$scope.profile[i];
 }
}
console.log( $scope.oneserveice)
}
////
$scope.edit={};
  $scope.upload=function(element){
   var file=element[0];
   console.log(file)
    var reader = new FileReader();
   reader.addEventListener("load", function () {
    $scope.edit.img = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
   console.log($scope.data)
  }

///// end upload img
$scope.editservice=function(id){
$scope.edit.id=id;
console.log(id)
Tradeworker.edit($scope.edit);
$window.location.reload();
}
// end get one servecis to edit 
$scope.deleteid={};
$scope.Confirmdelete = function (id) {
  if ($window.confirm("Are you Sure!!!")) {
     $scope.deleteid.id=id;
    console.log($scope.deleteid)
    Tradeworker.deleteserv($scope.deleteid);

       } 
        $window.location.reload();
      }
})