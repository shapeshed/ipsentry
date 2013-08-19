var connect = require('connect'),
    http = require('http'),
    request = require('request'),
    assert = require('assert'),
    ipsentry = require('../lib/ipsentry');

var testApp = connect()
  .use(ipsentry(['127.0.0.1']))
  .use(function(req, res){
    res.end('hello world\n');
  });

describe('Making a get request', function(){
  before(function(){
    http.Server(testApp).listen(3000);
  });
  describe('with a valid remote IP', function(){
    it('should get return a 200 response', function(done){
      request.get({
        url: 'http://127.0.0.1:3000'
      }, function(err, res, body){
        assert.strictEqual(res.statusCode, 200);
        done();
      });
    });
  });
  describe('with a valid remote IP', function(){
    it('should get return a 200 response', function(done){
      request.get({
        url: 'http://127.0.0.1:3000',
        headers: {
          'x-forwarded-for': '80.87.25.146'
        }
      }, function(err, res, body){
        console.log(body);
        assert.strictEqual(res.statusCode, 403);
        done();
      });
    });
  });
});
