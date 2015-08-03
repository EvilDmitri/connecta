'use strict';

angular.module('myBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        //templateUrl: 'app/main/main.html',
        //controller: 'MainCtrl'
        data: {pageTitle: 'Main'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'FXCtrl'
          },
          'content@fx': {
            templateUrl: 'app/fx/fx.html'
          }
        }
      });
  });
