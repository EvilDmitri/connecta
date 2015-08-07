'use strict';

angular.module('myBlogApp')
  .controller('CreateCtrl', function ($scope, $http) {


    $scope.autocompleteOptions = {
      componentRestrictions: { country: 'ee' }
    };

    $scope.thing = {
      address:null
    };

    $scope.addThing = function() {
      console.log($scope.thing.address.geometry.location.lat(), $scope.thing.address.geometry.location.lng());
      console.log($scope.thing);
      $scope.thing.position = {
        lat:$scope.thing.address.geometry.location.lat(),
        lng:$scope.thing.address.geometry.location.lng()
      };
      addThing($scope.thing);
    };




    var addThing = function() {
      if($scope.newThing === '') {
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

  });
