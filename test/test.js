'use strict';

var expect = require('chai').expect;
var assert = require('assert');
var golfnow = require('../index');

describe('#connection', function() {
    it('getApiRoot error credential', function(done) {
        var app = golfnow("CLIENT_ID", "CLIENT_SECRET");

        var request = app.getApiRoot();

        request.on('error', function(error) {
            expect(error).to.have.property('responseBody').to.be.equal('{"errorCode":13,"message":"The client provided invalid credentials."}');
            done();
        });

        request.end();
    });
});