const JWT = require('jsonwebtoken');
require('dotenv').config();

function decodeSession(req, res, next) {
  if (req?.session?.user?.token) {
    const tokenDecoded = JWT.verify(req.session.user.token, process.env.JWT_SECRET);
    req.user = tokenDecoded;
  }
  next();
}
module.exports = { decodeSession };
