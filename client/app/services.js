angular.module('myapp.services', [])

.factory('User', function ($http, $location, $window) { 
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/user/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/user/signup',
      data: user
    }).then(function (resp) {
      return resp.data;
    });
  }

  var signout = function () {
    $window.localStorage.removeItem('com.book');
    $window.localStorage.removeItem('user.book');
    $window.localStorage.removeItem('userId');

    $location.path('/login');
    $window.location.reload();
  }

  var udateimg = function(img){
	  return $http({
      method: 'POST',
      url: '/api/user/updateimg',
      data: img
    }).then(function (resp) {
      return resp.data;
    });
	  
  }
  return {
    signin: signin,
    signup: signup,
    signout: signout,
	udateimg:udateimg
  }
})

.factory('Tradeworker',function ($http, $location) {

  var insert = function (radeworker) {
    return $http({
      method : 'POST',
      url : '/api/insert',
      data : radeworker
    }).then(function (resp) {
      return resp.data
    })
  }

  var getAll = function () {
    return $http({
      method : 'GET',
      url : '/api/insert'
    }).then(function (resp) {
      return resp.data
    })
  }

 //// edit service
  var edit=function(service){
     return $http({
      method : 'POST',
      url : '/api/edit',
      data : service
    }).then(function (resp) {
      return resp.data
    })
  }
  /// delete service
  var deleteserv=function (deleteid) {
     return $http({
      method : 'POST',
      url : '/api/delete',
      data : deleteid
    }).then(function (resp) {
      return resp.data
    })
  }

  return {
    insert : insert,
    getAll : getAll,
    edit : edit,
    deleteserv:deleteserv
  }
})
