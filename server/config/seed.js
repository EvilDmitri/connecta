/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

 var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

 Thing.find({}).remove(function() {
   Thing.create({
     name : 'First ',
     info : 'We need to do a first thing',
     position: {lat:59.315135,lng:27.053294}
   }, {
     name : 'Second',
     info : 'We need to do a second thing',
     position: {lat:58.315135,lng:26.653294}
   }, {
     name : 'Third',
     info : 'We need to do a third thing',
     position: {lat:58.915135,lng:26.01}
   });
 });

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
