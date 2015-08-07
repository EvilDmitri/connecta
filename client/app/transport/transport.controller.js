'use strict';

angular.module('myBlogApp')
  .controller('TransportCtrl', function ($scope) {
    $scope.message = 'Hello';


    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

  });
