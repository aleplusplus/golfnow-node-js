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

var ApiRoot = require('./api_root').ApiRoot;
var Channel = require('./channel').Channel;

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

Application.prototype.getChannel = function(channel, options) {
    var self = this;
    var opt = options || {};
    var cha = channel || null;

    if (!('endpoint' in opt)) {
        opt.endpoint = self.endpoint;
    }

    return new Channel(self, cha, opt);
};