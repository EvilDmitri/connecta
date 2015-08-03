'use strict';

angular.module('myBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ehitus', {
        url: '/ehitus',
        templateUrl: 'app/ehitus/ehitus.html',
        controller: 'EhitusCtrl'
      });
  });