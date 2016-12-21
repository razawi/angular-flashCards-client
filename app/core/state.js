// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/profile');


  $stateProvider
    .state('app', {
      url: '',
      controller: 'AppCtrl',
      views: {
        'navbar': {
          templateUrl: 'core/templates/navbar.tpl.html',
          controller: 'NavbarCtrl'
        },
        'main': {
          templateUrl: 'core/templates/main.tpl.html'
        }
      }
    })
    .state('404', {
      url: '/404',
      templateUrl: 'core/templates/404.tpl.html',
      controller: 'AppCtrl'
    });

}]);