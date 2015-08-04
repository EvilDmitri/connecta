'use strict';

angular.module('myBlogApp')
  .controller('MapCtrl', function ($scope) {
    $scope.positions = [{lat:59.315135,lng:27.053294}];

    $scope.addMarker = function(event) {
      var ll = event.latLng;
      $scope.positions.push({lat:ll.lat(), lng: ll.lng()});
    };

  });
