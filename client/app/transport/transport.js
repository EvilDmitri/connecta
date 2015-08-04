'use strict';

angular.module('myBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('transport', {
        url: '/transport',
        data: {pageTitle: 'Transport'},
        views: {
          'main': {
            templateUrl: 'app/transport/transport.html',
            controller: 'TransportCtrl'
          }
          //,
          //'content@transport': {
          //  templateUrl: 'app/transport/transport.html',
          //  controller: 'FXCtrl'
          //}
        }
      });
  });
