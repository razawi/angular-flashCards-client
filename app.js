var app = angular.module('app', ['ui.router', 'darthwade.dwLoading']);

app.run(function($rootScope) {
    console.log('app loaded');
});