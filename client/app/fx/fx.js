'use strict';

angular.module('myBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fx', {
        url: '/fx',
        data: {pageTitle: 'FX Prices'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          },
          'content@fx': {
            templateUrl: 'app/fx/fx.html',
            controller: 'FXCtrl'
          }
        }
      });
  });
