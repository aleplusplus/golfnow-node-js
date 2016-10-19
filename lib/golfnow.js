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

var hostname = 'affiliate.gnsvc.com';
var endpoint = '/api/v1/';

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createApplication;

function createApplication(clientId, clientSecret, options) {

    if (!clientId) {
        throw new Error('\'clientId\' cannot be empty.');
    }

    if (!clientSecret) {
        throw new Error('\'clientSecret\' cannot be empty.');
    }

    if (!options) {
        var opt = options || {};
    }

    return new Application(clientId, clientSecret, opt);
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