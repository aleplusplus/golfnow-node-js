/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.Reservation = module.exports.Reservation = Reservation;

util.inherits(Reservation, Request);

function Reservation(application, options) {

    Reservation.super_.apply(this, [application, options]);
}

Reservation.prototype._headers = function() {
    var headers = Reservation.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

Reservation.prototype._requestOptions = function() {
    var request_options = Reservation.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint;
    request_options.method = 'GET';

    return request_options
};

Reservation.prototype.end = function() {

    Reservation.super_.prototype.end.apply(this, arguments);
};