/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.TeeTimeSummary = module.exports.TeeTimeSummary = TeeTimeSummary;

util.inherits(TeeTimeSummary, Request);

function TeeTimeSummary(application, channelId, courseId, query, options) {
    var self = this;

    self.channelId = channelId;
    self.courseId = courseId;
    self.query = query;

    TeeTimeSummary.super_.apply(this, [application, options]);
}

TeeTimeSummary.prototype._headers = function() {
    var headers = TeeTimeSummary.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

TeeTimeSummary.prototype._requestOptions = function() {
    var request_options = TeeTimeSummary.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint +
        'channels/' + this.channelId +
        '/courses/' + this.courseId +
        '/tee-time-summaries' + (Object.keys(this.query).length ? '?' + this.query : '');
    request_options.method = 'GET';

    return request_options
};

TeeTimeSummary.prototype.end = function() {

    TeeTimeSummary.super_.prototype.end.apply(this, arguments);
};