/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /fx              ->  index
 * POST    /fx              ->  create
 * GET     /fx/:id          ->  show
 * PUT     /fx/:id          ->  update
 * DELETE  /fx/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var FX = require('./fx.model');

// Get list of fx
exports.index = function(req, res) {
  FX.find(function (err, fx) {
    if(err) { return handleError(res, err); }
    return res.json(200, fx);
  });
};

// Get a single fx
exports.show = function(req, res) {
  FX.findById(req.params.id, function (err, fx) {
    if(err) { return handleError(res, err); }
    if(!fx) { return res.send(404); }
    return res.json(fx);
  });
};

// Creates a new fx in the DB.
exports.create = function(req, res) {
  FX.create(req.body, function(err, fx) {
    if(err) { return handleError(res, err); }
    return res.json(201, fx);
  });
};

// Updates an existing fx in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  FX.findById(req.params.id, function (err, fx) {
    if (err) { return handleError(res, err); }
    if(!fx) { return res.send(404); }
    var updated = _.merge(fx, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, fx);
    });
  });
};

// Deletes a fx from the DB.
exports.destroy = function(req, res) {
  FX.findById(req.params.id, function (err, fx) {
    if(err) { return handleError(res, err); }
    if(!fx) { return res.send(404); }
    fx.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
