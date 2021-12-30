'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credentials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Credentials.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    userID: {
      type:DataTypes.INTEGER,
      references:{
        model:{
          tableName:"UserDetail"
        },
        key:"id"
      },
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Credentials',
  });
  Credentials.associate=function(models){
    Credentials.belongsTo(models.UserDetail)
  }
  return Credentials;
};