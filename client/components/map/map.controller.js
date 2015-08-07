'use strict';

angular.module('myBlogApp')
  .controller('MapCtrl', function ($scope, $http, $timeout, socket) {

    $scope.$on('mapInitialized', function(event, map) {
      //var latlng = new google.maps.LatLng("58.6, 24.0");
      //map.setCenter(latlng);
      //map.setScale(7);
    });


    $scope.Things = [];

    $http.get('/api/things').success(function(Things) {
      $scope.Things = Things;

      var markers = [];
      var info = [];
      var all_length = $scope.Things.length;
      for (var i=0; i<all_length ; i++) {

        var lat = Things[i].position.lat;
        var lng = Things[i].position.lng;
        var latlng = new google.maps.LatLng(lat, lng);

        info[i] = new google.maps.InfoWindow({
          content: '<h2>'+ Things[i].name +'</h2>' + Things[i].info
        });
        //info[i].setOptions(options:{visible:false});

        markers[i] = new google.maps.Marker({
          title: Things[i].name
        });

        markers[i].setPosition(latlng);
        markers[i].setMap($scope.map);

        google.maps.event.addListener(markers[i], 'click', function(i) {
          return function(){
            info[i].open($scope.map,markers[i]);
          }
        }(i));

      }

      socket.syncUpdates('thing', $scope.Things);
    });

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
