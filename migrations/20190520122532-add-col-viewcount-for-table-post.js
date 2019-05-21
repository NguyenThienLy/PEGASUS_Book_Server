'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_post',
        'reaction',
        { type: Sequelize.INTEGER, defaultValue: 0, allowNull: false }
      )
      await queryInterface.addColumn(
        'tbl_post',
        'view',
        { type: Sequelize.INTEGER, defaultValue: 0, allowNull: false }
      )
     
      
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_post',
        'reaction'
      )
      await queryInterface.removeColumn(
        'tbl_post',
        'view'
      )
      
      
    });
  }
};
