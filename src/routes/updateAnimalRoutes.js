const updateAnimalRoutes = require('express').Router();

const { Animal, Photo } = require('../../db/models');
const UpdateAnimal = require('../views/UpdateAnimal');
const renderTemplate = require('../lib/renderTemplate');

updateAnimalRoutes.get('/:id', async (req, res) => {
  const login = req.user?.login;
  const { id } = req.params;
  try {
    const animal = await Animal.findByPk(id, { include: [Photo] });
    renderTemplate(UpdateAnimal, { login, animal }, res);
  } catch (error) {
    console.log(error, 'Ошибка в создании страницы')
  }
});

updateAnimalRoutes.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {
        image1, image2, image3, image4, title, description,
      } = req.body;
    try {
        const queryAnimal = await Animal.findByPk(id);
        const queryPotos = await Photo.findAll({ where: { animal_id: id } });
        
        if(queryAnimal || queryPotos) {
            queryAnimal.title = title;
            queryAnimal.description = description;
            await queryAnimal.save();

            queryPotos.forEach(async (photo, index) => {
                switch(index) {
                    case 0: 
                        await photo.update({ image: image1 });
                        break;
                    case 1: 
                        await photo.update({ image: image2 });
                        break;
                    case 2: 
                        await photo.update({ image: image3 });
                        break;
                    case 3: 
                        await photo.update({ image: image4 });
                        break;
                    default:
                        break;
                }
            });

            res.json({ msg: 'Данные обновлены' })
        }else {
            res.json({ err: 'Не удалось обновить данные' });
        }
    } catch (error) {
        console.log(error, 'ОШИБКА В РУЧКЕ UPDATE ЖИВОТНОГО');
        res.sendStatus(400);
    }
})

module.exports = updateAnimalRoutes;
