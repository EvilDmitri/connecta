'use strict';

angular.module('myBlogApp')
  .controller('CreateCtrl', function ($scope, $http) {


    $scope.autocompleteOptions = {
      componentRestrictions: { country: 'ee' }
    };

    $scope.thing = {
      address:null
    };

    $scope.createThing = function() {
      console.log($scope.thing.address.geometry.location.lat(), $scope.thing.address.geometry.location.lng());
      console.log($scope.thing);
      $scope.thing.position = {
        lat:$scope.thing.address.geometry.location.lat(),
        lng:$scope.thing.address.geometry.location.lng()
      };
      addThing($scope.thing);
    };




    var addThing = function() {
      if($scope.thing === '') {
        return;
      }
      $http.post('/api/things', {
        name: $scope.thing.name,
        info: $scope.thing.info,
        address: $scope.thing.address,
        position: $scope.thing.position
      });
      $scope.thing = '';
    };

  })

  .config(['flowFactoryProvider', function (flowFactoryProvider) {
    flowFactoryProvider.defaults = {
      target: 'api/images',
      permanentErrors: [404, 500, 501],
      maxChunkRetries: 1,
      chunkRetryInterval: 5000,
      simultaneousUploads: 4,
      singleFile: true
    };
    flowFactoryProvider.on('catchAll', function (event) {
      console.log('catchAll', arguments);
    });
    // Can be used with different implementations of Flow.js
    // flowFactoryProvider.factory = fustyFlowFactory;
  }]);
