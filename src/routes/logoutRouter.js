const express = require('express');

const logoutRouter = express.Router();

logoutRouter.get('/', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = logoutRouter;
