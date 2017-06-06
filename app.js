var app = angular.module('app', ['ui.router', 'darthwade.dwLoading'], function config($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

app.run(function($rootScope) {

    // debugger;
    // $scope.inited = true;

});
