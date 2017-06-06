app.controller('LogInCtrl', ['$scope', '$http', '$loading', 'RandomUserFactory', 'UserFactory', 'AuthTokenFactory',  
    function($scope, $http, $loading, RandomUserFactory, UserFactory, AuthTokenFactory) {

    var vm = this;
    vm.getRandomUser = getRandomUser;
    vm.login = login;
    vm.logout = logout;

    function getRandomUser() {
      RandomUserFactory.getUser().then(function success(response) {
        vm.randomUser = response.data;
      }, handleError);
    }

    function login(username, password) {
      UserFactory.login(username, password).then(function success(response) {
        vm.user = response.data.user;
      }, handleError);
    }

    function logout(){
      AuthTokenFactory.setToken();
      vm.user = null;
      vm.password=null;
    }

    function handleError(response) {
      alert('Error: ' + response.data);
    }

}]);


    
  app.factory('RandomUserFactory', function RandomUserFactory($http) {
    'use strict';
    return {
      getUser: getUser
    };

    function getUser() {
      console.log('$http.get');
      return $http.get(configData.jwt + '/random-user');
    }
  });

  app.factory('UserFactory', function UserFactory($http, AuthTokenFactory, $q) {
    'use strict';
    return {
      login: login,
      getUser: getUser
    };

    function login(username, password) {
      return $http.post(configData.jwt + '/login', {
        username: username,
        password: password
      }).then(function success(response) {
        AuthTokenFactory.setToken(response.data.token);
        return response;
      });
    }

    function getUser() {
      if (AuthTokenFactory.getToken()) {
        return $http.get(configData.jwt + '/me');
      } else {
        return $q.reject({ data: 'client has no auth token' });
      }
    }
  });

  app.factory('AuthTokenFactory', function AuthTokenFactory($window) {
    'use strict';
    var store = $window.localStorage;
    var key = 'auth-token';

    return {
      getToken: getToken,
      setToken: setToken
    };

    function getToken() {
      return store.getItem(key);
    }

    function setToken(token) {
      if (token) {
        store.setItem(key, token);
      } else {
        store.removeItem(key);
      }
    }

  });

  app.factory('AuthInterceptor', function AuthInterceptor(AuthTokenFactory) {
    'use strict';
    return {
      request: addToken
    };

    function addToken(config) {
      var token = AuthTokenFactory.getToken();
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }
  });
