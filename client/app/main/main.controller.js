'use strict';

angular.module('myBlogApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, socket, $log, Modal) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });




    // Our callback function is called if/when the delete modal is confirmed
    //$scope.delete_thing = function() {
    //  console.log('modal');
    //};
    $scope.delete_thing = Modal.confirm.delete(function() {

    });

  });
