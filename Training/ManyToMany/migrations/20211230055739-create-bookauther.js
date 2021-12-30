'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookauthers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      athurId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"authers"
          },
          key:"id"
        },
        allowNull:false
      },
      bookId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"books"
          },
          key:"id"
        },
        allowNull:false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookauthers');
  }
};