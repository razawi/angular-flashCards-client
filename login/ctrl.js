app.controller('LogInCtrl', ['$scope', '$http', '$loading', 'RandomUserFactory', 'UserFactory',  
    function($scope, $http, $loading, RandomUserFactory, UserFactory) {

    var vm = this;
    vm.getRandomUser = getRandomUser;
    vm.login = login;

    function getRandomUser() {
      RandomUserFactory.getUser().then(function success(response) {
        vm.randomUser = response.data;
      }, handleError);
    }

    function login(username, password) {
      UserFactory.login(username, password).then(function success(response) {
        vm.user = response.data;
      }, handleError);
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
      return $http.get(configData.jwt + '/login');
    }
  });

  app.factory('UserFactory', function UserFactory($http) {
    'use strict';
    return {
      login: login
    };

    function login(username, password) {
      return $http.post(configData.jwt + '/login', {
        username: username,
        password: password
      });
    }
    
 });

