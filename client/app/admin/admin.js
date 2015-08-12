'use strict';

angular.module('myBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        data: {pageTitle: 'Admin page'},
        views: {
          'main': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminCtrl'
          }
          //,
          //'content@transport': {
          //  templateUrl: 'app/transport/transport.html',
          //  controller: 'FXCtrl'
          //}
        }
      });
  });
