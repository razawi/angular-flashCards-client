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
    .state('app.coming_soon', {
      url: '/comingsoon',
      templateUrl: 'comingSoon/coming.soon.tpl.html',
      controller: 'ComingSoonCtrl'
    });

}]);