'use strict';

var expect = require('chai').expect;
var golfnow = require('../index');

var app = golfnow("clientId", "clientSecret", "options");

describe('#connection', function() {
    it('should convert single digits', function() {

        var request = app.getApiRoot();

        request.on('response', function(response) {
            expect(response).to.equal('1');
            console.log(response);
        });

        request.on('error', function(error) {
            console.log(error);
        });
    });
});