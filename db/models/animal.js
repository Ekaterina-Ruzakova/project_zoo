const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
      this.hasMany(models.Photo, {
        foreignKey: 'animal_id',
      });
    }
  }
  Animal.init({
    description: DataTypes.STRING,
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};
