Node.js SDK for GolfNow
===============

Node.js SDK for GolfNow

## Installation

* Install [Node.js](https://nodejs.org/)
* Install golfnow SDK with `npm`:

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