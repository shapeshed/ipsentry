# IPSentry

[![Build Status](https://secure.travis-ci.org/shapeshed/ipsentry.png)](http://travis-ci.org/shapeshed/ipsentry)

ipsentry is a lightweight piece of [Connect][1] Middleware to provide access control based on a ip addresses.

## Installation

via [npm][2]

    npm install ipsentry

## Usage

ipsentry expects an array of ip addresses. These are whitelisted for access.

If a client tries to connect from an invalid ip address a 403 response will be returned. 

For [connect][1]

    var connect = require('connect'),
      http = require('http')
      ipsentry = require('ipsentry');

    function accessGranted(req, res){
      res.end('ipsentry says yes!');
    }
    var app = connect()
      .use(ipsentry(['127.0.0.1']))
      .use(accessGranted)
     
    http.Server(app).listen(3000);

For [express][3]

    var express = require('express'),
      ipsentry = require('ipsentry'),
      app = express();

    app.use(ipsentry(['127.0.0.1']))

    app.get('/', function(req, res){
      res.send('ipsentry says yes!');
    });

    app.listen(3000);

[1]: https://github.com/senchalabs/connect/
[2]: http://npmjs.org/
[3]: http://expressjs.com/
