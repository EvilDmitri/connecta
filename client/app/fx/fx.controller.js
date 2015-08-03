'use strict';

var app = angular.module('myBlogApp');

app.controller('FXCtrl', function ($scope, socket) {

  // Register socket to receive data from fx_module
  socket.syncInfo(function(event, data) {
    $scope.rates = data.payload;
    console.log('update', data.payload);
  });

});



