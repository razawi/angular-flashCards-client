'use strict';

angular.module('flashCardsApp', ['ngResource', 'ngRoute', 'treeGrid',
    'darthwade.loading'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:  'fullCardlistCtrl',
                templateUrl: '/public/apps/angular-client/Partials/CardsList.html'
            })
            .when('/cardspile/:categoryId', {
                controller:  'cardPileCtrl',
                templateUrl: '/public/apps/angular-client/Partials/CardPile.html'
            })
            //.when('/cardview/:cardId', {
            //    controller:  'cardViewCtrl',
            //    templateUrl: '/public/apps/angular-client/Partials/cardFace.html'
            //})
            .when('/faceview/:ctegoryId/:cardnum/:facenum', {
                controller:  'faceViewCtrl',
                templateUrl: '/public/apps/angular-client/Partials/cardFace.html'
            })
            .when('/categories/:curriculumId', {
                controller:  'categoryListCtrl',
                templateUrl: '/public/apps/angular-client/Partials/categoryList.html'
            })
            .otherwise('/')
            // TODO: view and controller for:  cardEdit, CategoryEdit, curiculum edit
    }]);
