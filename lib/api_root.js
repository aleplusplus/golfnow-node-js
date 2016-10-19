/*!
* golfnow
* Copyright (c) 2016 Alejandro Labrada Diaz
* MIT Licensed
*/

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.GetApiRoot = module.exports.GetApiRoot = GetApiRoot;

util.inherits(GetApiRoot, Request);

function GetApiRoot(application, options) {

    GetApiRoot.super_.apply(this, [application, options]);
}

GetApiRoot.prototype._headers = function() {
    var headers = GetApiRoot.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

GetApiRoot.prototype._requestOptions = function() {
    var request_options = GetApiRoot.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint;
    request_options.method = 'GET';

    return request_options
};

GetApiRoot.prototype.end = function() {

    GetApiRoot.super_.prototype.end.apply(this, arguments);
};