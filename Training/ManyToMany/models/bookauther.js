'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class bookauther extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // bookauther.belongsToMany(models.book,{through:"authers"})
      // bookauther.belongsToMany(models.auther,{through:"books"})
    }
  };
  bookauther.init({
    athurId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bookauther',
    timestamps:false
  });
  return bookauther;
};