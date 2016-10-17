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
    self.password = password;
    self.secret = secret;
}