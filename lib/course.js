/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.Course = module.exports.Course = Course;

util.inherits(Course, Request);

function Course(application, channelId, courseId, options) {
    var self = this;

    self.channelId = channelId;
    self.courseId = courseId;

    Course.super_.apply(this, [application, options]);
}

Course.prototype._headers = function() {
    var headers = Course.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

Course.prototype._requestOptions = function() {
    var request_options = Course.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint + 'channels/' + this.channelId + '/courses/' + this.courseId;
    request_options.method = 'GET';

    return request_options
};

Course.prototype.end = function() {

    Course.super_.prototype.end.apply(this, arguments);
};