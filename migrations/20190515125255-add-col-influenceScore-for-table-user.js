'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_user',
        'influenceScore',
        { type: Sequelize.INTEGER, defaultValue: 1 }
      )
      
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_user',
        'influenceScore'
      )
      
    });
  }
};
