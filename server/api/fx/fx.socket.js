/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var fx = require('./fx.model');

exports.register = function(socket) {
  fx.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  fx.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
};

function onSave(socket, doc, cb) {
  socket.emit('fx:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('fx:remove', doc);
}
