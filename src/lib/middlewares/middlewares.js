const JWT = require('jsonwebtoken');
require('dotenv').config();

function decodeSession(req, res, next) {
  if (req.cookies?.auth) { 
    /**
     * расшифровывает токен, возвращает объект который положили в функции generateToken
     */
    const tokenDecoded = JWT.verify(req.cookies?.auth, process.env.JWT_SECRET); 
    req.user = tokenDecoded; // добавляет в req объект из токена по ключу user
  }
  next();
}
function checkUser(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = { decodeSession, checkUser };
