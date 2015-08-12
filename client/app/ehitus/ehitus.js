'use strict';

angular.module('myBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ehitus', {
        url: '/ehitus',
        data: {pageTitle: 'Ehitus'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
          ,
          'content@ehitus': {
            templateUrl: 'app/ehitus/ehitus.html',
            controller: 'EhitusCtrl'
          }
        }
      });
  });
