'use strict';

angular.module('myBlogApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, socket, $mdSidenav, $log) {
    $scope.awesomeThings = [];

    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle()
        .then(function(){
          $log.debug("toggle left is done");
        });
    };
    //$http.get('/api/things').success(function(awesomeThings) {
    //  $scope.awesomeThings = awesomeThings;
    //  socket.syncUpdates('thing', $scope.awesomeThings);
    //});
    //
    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};
    //
    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/things/' + thing._id);
    //};
    //
    //$scope.$on('$destroy', function () {
    //  socket.unsyncUpdates('thing');
    //});
  });
