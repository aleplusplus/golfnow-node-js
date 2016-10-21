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
