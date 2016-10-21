Node.js SDK for GolfNow
=======================
[![npm](https://img.shields.io/npm/v/golfnow.svg)]() [![npm](https://img.shields.io/npm/dt/golfnow.svg)]() [![Build Status](https://travis-ci.org/aleplusplus/golfnow-node-js.svg?branch=master)](https://travis-ci.org/aleplusplus/golfnow-node-js) [![Coverage Status](https://coveralls.io/repos/github/aleplusplus/golfnow-node-js/badge.svg?branch=master)](https://coveralls.io/github/aleplusplus/golfnow-node-js?branch=master)


Node.js SDK for GolfNow

## Installation

* Install [Node.js](https://nodejs.org/)
* Install GolfNow SDK with `npm`:

`npm install golfnow`


## Usage

    var golfnow = require("golfnow");
    
    var app = golfnow("CLIENT_ID", "CLIENT_SECRET");
    
    var request = app.getApiRoot();
    
    request.on('response', function(response) {
        console.log(response);
    });
    
    request.on('error', function(error) {
        console.log(error);
    });
    
    request.end();

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.