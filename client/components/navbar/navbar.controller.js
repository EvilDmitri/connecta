'use strict';

angular.module('myBlogApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      {
        'title': 'Kõik',
        'description': ['Main page'],
        'link': '/'
      },
      {
        'title': 'Ehitus',
        'description': ['Ehitus'],
        'link': '/ehitus'
      },
      {
        'title': 'Transport',
        'description': ['Transport'],
        'link': '/transport'
      },
      {
        'title': '',
        'description': ['clear'],
        'link': ''
      },
      {
        'title': '',
        'description': ['clear'],
        'link': ''
      },
      {
        'title': 'Logi sisse',
        'description': ['Login'],
        'link': '/login'
      },
      {
        'title': 'Registeeru',
        'description': ['Register'],
        'link': '/signup'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
