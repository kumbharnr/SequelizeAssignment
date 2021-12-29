'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserDetail.init({
    name: DataTypes.STRING,
    PhoneNo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  UserDetail.associate=function(models){
    UserDetail.hasOne(models.Credentials)
}
  return UserDetail;
};