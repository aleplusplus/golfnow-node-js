'use strict';

var expect = require('chai').expect;
var golfnow = require('../index');

describe('#connection', function() {
    it('getApiRoot', function() {

        var app = golfnow("clientId", "clientSecret");

        var request = app.getApiRoot();

        request.on('response', function(response) {
            expect(response);
            console.log(response);
        });

        request.on('error', function(error) {
            expect(error);
            console.log(error);
        });

        request.end();
    });
});