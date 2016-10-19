/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.Invoice = module.exports.Invoice = Invoice;

util.inherits(Invoice, Request);

function Invoice(application, options) {

    Invoice.super_.apply(this, [application, options]);
}

Invoice.prototype._headers = function() {
    var headers = Invoice.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

Invoice.prototype._requestOptions = function() {
    var request_options = Invoice.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint;
    request_options.method = 'GET';

    return request_options
};

Invoice.prototype.end = function() {

    Invoice.super_.prototype.end.apply(this, arguments);
};
