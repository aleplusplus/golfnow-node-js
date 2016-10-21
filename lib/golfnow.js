/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var util = require('util');
var https = require('https');
var http = require('http');
var querystring = require('querystring');

var ApiRoot = require('./api_root').ApiRoot;
var Channel = require('./channel').Channel;
var Course = require('./course').Course;
var CourseSummary = require('./course_summary').CourseSummary;
var Invoice = require('./invoice').Invoice;
var CreateInvoice = require('./invoice').CreateInvoice;
var Rate = require('./rate').Rate;
var RateTag = require('./rate_tag').RateTag;
var Reservation = require('./reservation').Reservation;
var CreateReservation = require('./reservation').CreateReservation;
var TeeTimeSummary = require('./tee_time_summary').TeeTimeSummary;

var hostname = 'affiliate.gnsvc.com';
var endpoint = '/api/v1/';

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createApplication;


function createApplicationValidator(clientId, clientSecret, options) {
    var opt = options || {};

    if (!clientId) {
        throw new Error('\'clientId\' cannot be empty.');
    }

    if (!clientSecret) {
        throw new Error('\'clientSecret\' cannot be empty.');
    }

    return new Application(clientId, clientSecret, opt);
}

function createApplication(args) {
    if (arguments.length > 2) {
            if (typeof arguments[3] == "object") {
                return createApplicationValidator.apply(this, arguments);
            } else {
                throw new Error('Wrong parameters of initialization.');
            }
    } else {
        return createApplicationValidator.apply(this, arguments);
    }
}

function Application(clientId, clientSecret, options) {
    var self = this;

    self.clientId = clientId;
    self.clientSecret = clientSecret;

    self.hostname = options.hostname || hostname;
    self.endpoint = options.endpoint || endpoint;

    if ('secure' in options) {
        self.secure = options.secure;
    } else {
        self.secure = true;
    }

    var _http = self.secure ? https : http;
    self._agent = new _http.Agent({ keepAlive: true });
}

Application.prototype.getApiRoot = function(options) {
    var self = this;
    var opt = options || {};

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new ApiRoot(self, opt);
};

Application.prototype.getChannel = function(channelId, options) {
    var self = this;
    var opt = options || {};
    var chaId = channelId || null;

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new Channel(self, chaId, opt);
};

Application.prototype.getCourse = function(channelId, courseId, options) {
    var self = this;
    var opt = options || {};

    if (!channelId) {
        throw new Error('\'channeIdl\' cannot be empty.');
    }

    if (!courseId) {
        throw new Error('\'courseId\' cannot be empty.');
    }

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new Course(self, channelId, courseId, opt);
};

Application.prototype.getCourseSummary = function(channelId, query, options) {
    var self = this;
    var opt = options || {};
    var qs = querystring.stringify(query) || {};

    if (!channelId) {
        throw new Error('\'channeIdl\' cannot be empty.');
    }

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new CourseSummary(self, channelId, qs, opt);
};

Application.prototype.getInvoice = function(channelId, invoiceId, options) {
    var self = this;
    var opt = options || {};

    if (!channelId) {
        throw new Error('\'channeIdl\' cannot be empty.');
    }

    if (!invoiceId) {
        throw new Error('\'invoiceId\' cannot be empty.');
    }

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new Invoice(self, channelId, invoiceId, opt);
};

Application.prototype.createInvoice = function(channelId, query, options) {
    var self = this;
    var opt = options || {};

    if (!channelId) {
        throw new Error('\'channeIdl\' cannot be empty.');
    }

    if (query.length) {
        throw new Error('\'query\' cannot be empty.');
    }

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new CreateInvoice(self, channelId, query, opt);
};

Application.prototype.getRate = function(channelId, courseId, year, month, day, hour, minute, rateId,options) {
    var self = this;
    var opt = options || {};
    var rate = rateId || null;

    if (!channelId) {
        throw new Error('\'channeIdl\' cannot be empty.');
    }

    if (!courseId) {
        throw new Error('\'courseId\' cannot be empty.');
    }

    if (!year) {
        throw new Error('\'year\' cannot be empty.');
    }

    if (!month) {
        throw new Error('\'month\' cannot be empty.');
    }

    if (!day) {
        throw new Error('\'day\' cannot be empty.');
    }

    if (!hour) {
        throw new Error('\'hour\' cannot be empty.');
    }

    if (!minute) {
        throw new Error('\'minute\' cannot be empty.');
    }

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new Rate(self, channelId, courseId, year, month, day, hour, minute, rate, opt);
};

Application.prototype.getRateTag = function(rateTagId, options) {
    var self = this;
    var opt = options || {};
    var rateTag = rateTagId || null;

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new RateTag(self, rateTag, opt);
};

Application.prototype.getReservation = function(channelId, customerEmail, reservationId, options) {
    var self = this;
    var opt = options || {};

    if (!channelId) {
        throw new Error('\'channelId\' cannot be empty.');
    }

    if (!customerEmail) {
        throw new Error('\'customerEmail\' cannot be empty.');
    }

    if (!reservationId) {
        throw new Error('\'reservationId\' cannot be empty.');
    }

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new Reservation(self, channelId, customerEmail, reservationId, opt);
};

Application.prototype.createReservation = function(channelId, invoiceId, golferInfo, paymentInfo, options) {
    var self = this;
    var opt = options || {};
    var invoice = invoiceId || {};
    var golfer = golferInfo || {};
    var payment = paymentInfo || {};

    if (!channelId) {
        throw new Error('\'channelId\' cannot be empty.');
    }

    return new CreateReservation(self, channelId, invoice, golfer, payment, opt);
};

Application.prototype.getTeeTimeSummary = function(channelId, courseId, query, options) {
    var self = this;
    var opt = options || {};
    var qs = querystring.stringify(query) || {};

    if (!channelId) {
        throw new Error('\'channeIdl\' cannot be empty.');
    }

    if (!courseId) {
        throw new Error('\'courseId\' cannot be empty.');
    }

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new TeeTimeSummary(self, channelId, courseId, qs, opt);
};