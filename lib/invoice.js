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

function Invoice(application, channelId, invoiceId, options) {
    var self = this;

    self.channelId = channelId;
    self.invoiceId = invoiceId;

    Invoice.super_.apply(this, [application, options]);
}

Invoice.prototype._headers = function() {
    var headers = Invoice.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

Invoice.prototype._requestOptions = function() {
    var request_options = Invoice.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint + 'channels/' + this.channelId + '/invoices/' + this.invoiceId;
    request_options.method = 'GET';

    return request_options
};

Invoice.prototype.end = function() {

    Invoice.super_.prototype.end.apply(this, arguments);
};


exports.CreateInvoice = module.exports.CreateInvoice = CreateInvoice;

util.inherits(CreateInvoice, Request);

function CreateInvoice(application, channelId, query, options) {
    var self = this;

    self.channelId = channelId;
    self.query = query;

    CreateInvoice.super_.apply(this, [application, options]);
}

CreateInvoice.prototype._headers = function() {
    var headers = CreateInvoice.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

CreateInvoice.prototype._requestOptions = function() {
    var request_options = CreateInvoice.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint + 'channels/' + this.channelId + '/invoices';
    request_options.method = 'POST';

    return request_options
};

CreateInvoice.prototype.end = function() {
    var self = this;

    self.write(JSON.stringify(self.query));

    CreateInvoice.super_.prototype.end.apply(this, arguments);
};