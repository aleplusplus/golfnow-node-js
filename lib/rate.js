/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.Rate = module.exports.Rate = Rate;

util.inherits(Rate, Request);

function Rate(application, channelId, courseId, year, month, day, hour, minute, rateId, options) {
    var self = this;

    self.channelId = channelId;
    self.courseId = courseId;
    self.year = year;
    self.month = month;
    self.day = day;
    self.hour = hour;
    self.minute = minute;
    self.rateId = rateId;

    Rate.super_.apply(this, [application, options]);
}

Rate.prototype._headers = function() {
    var headers = Rate.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

Rate.prototype._requestOptions = function() {
    var request_options = Rate.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint +
        'channels/' + this.channelId +
        '/courses/' + this.courseId +
        '/tee-times/' + this.year + '/' + this.month + '/' + this.day + '/' + this.hour + '/' + this.minute +
        '/rates' + (this.rateId ? '/' + this.rateId : '');
    request_options.method = 'GET';

    return request_options
};

Rate.prototype.end = function() {

    Rate.super_.prototype.end.apply(this, arguments);
};
