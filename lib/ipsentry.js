module.exports = function(ips){

  ips = ips || false;

  return function(req, res, next){

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    if (ips.indexOf(ip) === -1) {
      res.statusCode = 403;
      res.end();
    } else {
      next();
    }

  };

};
