/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.RateTag = module.exports.RateTag = RateTag;

util.inherits(RateTag, Request);

function RateTag(application, rateTagId, options) {
    var self = this;

    self.rateTagId = rateTagId;

    RateTag.super_.apply(this, [application, options]);
}

RateTag.prototype._headers = function() {
    var headers = RateTag.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

RateTag.prototype._requestOptions = function() {
    var request_options = RateTag.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint + 'rate-tags' + (this.rateTagId ? '/' + this.rateTagId : '');
    request_options.method = 'GET';

    return request_options
};

RateTag.prototype.end = function() {

    RateTag.super_.prototype.end.apply(this, arguments);
};
