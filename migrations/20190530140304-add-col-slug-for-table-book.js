'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_book',
        'slug',
        { type: Sequelize.TEXT, unique: true }
      )
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_book',
        'slug'
      )
    });
  }
};
