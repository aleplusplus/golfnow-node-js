/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

var golfnow = require("../index");

var app = golfnow("CJUALSXXDDWRWJ3XF5FXQCGRVEQAHF1U", "]=9&[I5kmlL+]:&|>vi&");

var request = app.getCourseSummary(19818, {latitude:25.761681, longitude:-80.191788});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();