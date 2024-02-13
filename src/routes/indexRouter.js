const express = require('express');

const indexRouter = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

indexRouter.get('/', async (req, res) => {
  renderTemplate(Home, { login: req.session.login }, res);
});

module.exports = indexRouter;
