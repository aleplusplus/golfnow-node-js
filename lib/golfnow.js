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
var crypto = require('crypto');

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createApplication;

function createApplication(args) {
    if(arguments.length == 3) {
        return new Application(this, arguments);
    }

    throw new Error('Wrong parameters of initialization.');
}

function Application(username, password, secret) {
    var self = this;

    self.username = username;
    self.password = crypto.createHash('sha1').update(password).digest('base64');
    self.secret = secret;

    if ('secure' in options) {
        self.secure = options.secure;
    } else {
        self.secure = true;
    }

    var _http = self.secure ? https : http;
    self._agent = new _http.Agent({ keepAlive: true });
}