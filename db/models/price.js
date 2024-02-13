const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    static associate(models) {
    }
  }
  Price.init({
    title_price: DataTypes.STRING,
    all_price: DataTypes.INTEGER,
    children_price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};
