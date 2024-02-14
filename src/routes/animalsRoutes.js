const animalsRoutes = require('express').Router();

const { Animal, Photo } = require('../../db/models');
const Animals = require('../views/Animals');
const renderTemplate = require('../lib/renderTemplate');
const { checkUser } = require('../lib/middlewares/middlewares');

animalsRoutes.get('/', async (req, res) => {
  const login = req.user?.login;
  const animals = await Animal.findAll({ include: [Photo] });
  renderTemplate(Animals, { login, animals }, res);
});

animalsRoutes.delete('/:id', checkUser, async (req, res) => {
  const { id } = req.params;
  try {
    await Photo.destroy({ where: { animal_id: id } })
    const delAnimal = await Animal.findByPk(id);
    await Animal.destroy({ where: { id } });
    res.json({ msg: 'Запись удалена', delAnimal })
  } catch (error) {
    console.log(error, 'Ошибка при удалении')
  }
})

module.exports = animalsRoutes;
