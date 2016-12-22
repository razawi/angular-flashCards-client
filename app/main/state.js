// Sub-application/main Level State
app.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('app.profile', {
      url: '/profile',
      templateUrl: 'myprofile/profile.tpl.html',
      controller: 'myprofile/ProfileCtrl'
    })
    .state('app.shop', {
      url: '/about',
      templateUrl: 'shop/shop.tpl.html',
      controller: 'ShopCtrl'
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
    });
    
}]);