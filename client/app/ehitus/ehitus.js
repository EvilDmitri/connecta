'use strict';

angular.module('myBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ehitus', {
        url: '/ehitus',
        data: {pageTitle: 'Ehitus'},
        views: {
          'main': {
            templateUrl: 'app/ehitus/ehitus.html',
            controller: 'EhitusCtrl'
          }
          //,
          //'content@transport': {
          //  templateUrl: 'app/transport/transport.html',
          //  controller: 'FXCtrl'
          //}
        }
      });
  });
