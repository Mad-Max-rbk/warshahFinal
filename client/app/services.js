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
    $location.path('/login');
  }

  return {
    signin: signin,
    signup: signup,
    signout: signout
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

  return {
    insert : insert,
    getAll : getAll
  }
})
