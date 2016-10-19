/*!
* golfnow
* Copyright (c) 2016 Alejandro Labrada Diaz
* MIT Licensed
*/

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.ApiRoot = module.exports.ApiRoot = ApiRoot;

util.inherits(ApiRoot, Request);

function ApiRoot(application, options) {

    ApiRoot.super_.apply(this, [application, options]);
}

ApiRoot.prototype._headers = function() {
    var headers = ApiRoot.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

ApiRoot.prototype._requestOptions = function() {
    var request_options = ApiRoot.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint;
    request_options.method = 'GET';

    return request_options
};

ApiRoot.prototype.end = function() {

    ApiRoot.super_.prototype.end.apply(this, arguments);
};