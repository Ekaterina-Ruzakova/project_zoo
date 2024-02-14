const newAnimalRoutes = require('express').Router();

const { Animal, Photo } = require('../../db/models');
const NewAnimal = require('../views/NewAnimal');
const renderTemplate = require('../lib/renderTemplate');

newAnimalRoutes.get('/', async (req, res) => {
  const { login } = req.session;

  renderTemplate(NewAnimal, { login: 'qw' }, res);
});

newAnimalRoutes.post('/', async (req, res) => {
  const { login } = req.session;
  const {
    image1, image2, image3, image4, title, description,
  } = req.body;
  try {
    const newAnimal = await Animal.create({ title, description });
    const newImage1 = await Photo.create({ image: image1, animal_id: newAnimal.id });
    const newImage2 = await Photo.create({ image: image2, animal_id: newAnimal.id });
    const newImage3 = await Photo.create({ image: image3, animal_id: newAnimal.id });
    const newImage4 = await Photo.create({ image: image4, animal_id: newAnimal.id });
    res.json({ msg: 'Животное добавлено в галерею' });
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ СОЗДАНИЯ НОВОГО ЖИВОТНОГО С КАРТИНКАМИ');
  }
});

module.exports = newAnimalRoutes;
