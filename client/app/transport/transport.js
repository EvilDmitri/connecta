'use strict';

angular.module('myBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('transport', {
        url: '/transport',
        templateUrl: 'app/transport/transport.html',
        controller: 'TransportCtrl'
      });
  });