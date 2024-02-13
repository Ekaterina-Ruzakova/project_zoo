const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      this.belongsTo(models.Animal, {
        foreignKey: 'animal_id',
      });
    }
  }
  Photo.init({
    image: DataTypes.STRING,
    animal_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};
