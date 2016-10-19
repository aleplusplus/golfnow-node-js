/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

var golfnow = require("../index");

var app = golfnow("CJUALSXXDDWRWJ3XF5FXQCGRVEQAHF1U", "=#4RhWD:XnNB;)KVTCOK");

var request = app.getApiRoot();

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();