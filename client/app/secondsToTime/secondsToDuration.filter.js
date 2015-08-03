'use strict';

var app = angular.module('myBlogApp');

app.filter('secondsToTime', function() {
    return function(timestamp) {
      var myDate = new Date( timestamp * 1000);
      return myDate.toUTCString();
    }
  });
