'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auther extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      auther.belongsToMany(models.book,{
        through:"bookauthers"
      })
    }
  };
  auther.init({
    athurName: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'auther',
    timestamps:false
  });
  return auther;
};