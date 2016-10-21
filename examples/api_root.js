/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

var golfnow = require("../index");

var app = golfnow("CLIENT_ID", "CLIENT_SECRET");

var request = app.getReservation(19818, 'alabradadiaz@gmail.com', 2016);

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();