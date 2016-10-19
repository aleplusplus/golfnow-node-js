/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.Channel = module.exports.Channel = Channel;

util.inherits(Channel, Request);

function Channel(application, options) {

    Channel.super_.apply(this, [application, options]);
}

Channel.prototype._headers = function() {
    var headers = Channel.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

Channel.prototype._requestOptions = function() {
    var request_options = Channel.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint;
    request_options.method = 'GET';

    return request_options
};

Channel.prototype.end = function() {

    Channel.super_.prototype.end.apply(this, arguments);
};