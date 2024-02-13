const animalsRoutes = require('express').Router();

const { Animal, Photo } = require('../../db/models');
const Animals = require('../views/Animals');
const renderTemplate = require('../lib/renderTemplate');

animalsRoutes.get('/', async (req, res) => {
  const { login } = req.session;
  const animals = await Animal.findAll({ include: [Photo] });
  console.log('=====>', animals);
  renderTemplate(Animals, { login: 'qw', animals }, res);
});

module.exports = animalsRoutes;
