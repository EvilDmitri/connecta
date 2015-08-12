'use strict';

angular.module('myBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('all', {
        url: '/',
        data: {pageTitle: 'Main'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          },
          'content@all': {
            templateUrl: 'app/all/all.html',
            controller: 'AllCtrl'
          }
        }
      });
  });
