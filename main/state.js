// Sub-application/main Level State
app.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('app.profile', {
      url: '/profile',
      templateUrl: 'myprofile/profile.tpl.html',
      controller: 'ProfileCtrl'
    })
    .state('app.curricula', {
      url: '/curricula',
      templateUrl: 'curricula/curricula.tpl.html',
      controller: 'CurriculaCtrl'
    })
    .state('app.stash', {
      url: '/stash',
      templateUrl: 'stash/stash.tpl.html',
      controller: 'StashCtrl'
    })
    .state('app.curriculum', {
      url: '/curriculum',
      templateUrl: 'curriculum/curriculum.tpl.html',
      controller: 'CurriculumCtrl'
    })
    .state('app.category', {
      url: '/category',
      templateUrl: 'category/category.tpl.html',
      controller: 'CategoryCtrl'
    })
    .state('app.card', {
      url: '/card',
      templateUrl: 'card/card.tpl.html',
      controller: 'CardCtrl'
    })
    .state('app.login', {
      url: '/login',
      templateUrl: 'login/tpl.html',
      controller: 'LogInCtrl'
    })
    .state('app.signup', {
      url: '/signup',
      templateUrl: 'signup/tpl.html',
      controller: 'SignUpCtrl'
    });
    
}]);