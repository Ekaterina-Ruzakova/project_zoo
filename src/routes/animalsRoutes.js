const animalsRoutes = require('express').Router();

const { Animal, Photo } = require('../../db/models');
const Animals = require('../views/Animals');
const renderTemplate = require('../lib/renderTemplate');

animalsRoutes.get('/', async (req, res) => {
  const { login } = req.session;
  const animals = await Animal.findAll({ include: [Photo] });
  renderTemplate(Animals, { login: 'qw', animals }, res);
});

animalsRoutes.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const {login} = req.session;
  try {
    const delAnimal = await Animal.findByPk(id);
    await Animal.destroy({where: {id}});
    res.json({msg: 'Удаление произошло адэкватно', delAnimal})
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ УДАЛЕНИЯ ЖИВОТНОГО')
  }
})

module.exports = animalsRoutes;
