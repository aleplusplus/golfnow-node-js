/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.CourseSummary = module.exports.CourseSummary = CourseSummary;

util.inherits(CourseSummary, Request);

function CourseSummary(application, channelId, query, options) {
    var self = this;

    self.channelId = channelId;
    self.query = query;

    CourseSummary.super_.apply(this, [application, options]);
}

CourseSummary.prototype._headers = function() {
    var headers = CourseSummary.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

CourseSummary.prototype._requestOptions = function() {
    var request_options = CourseSummary.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint + 'channels/' + this.channelId + '/course-summaries' + (Object.keys(this.query).length ? '?' + this.query : '' );
    request_options.method = 'GET';

    return request_options
};

CourseSummary.prototype.end = function() {

    CourseSummary.super_.prototype.end.apply(this, arguments);
};