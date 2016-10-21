/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

var golfnow = require("../index");

var app = golfnow("CJUALSXXDDWRWJ3XF5FXQCGRVEQAHF1U", "]=9&[I5kmlL+]:&|>vi&");

var request = app.getRate(19818, 1179, 2016, 10, 21, 18, 30);

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();