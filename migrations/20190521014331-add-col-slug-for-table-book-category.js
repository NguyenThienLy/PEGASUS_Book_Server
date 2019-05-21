'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_book_category',
        'slug',
        { type: Sequelize.TEXT, unique: true }
      )
      await queryInterface.addColumn(
        'tbl_book_category',
        'description',
        { type: Sequelize.TEXT }
      )
     
      
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_book_category',
        'slug'
      )
      await queryInterface.removeColumn(
        'tbl_book_category',
        'description'
      )
      
      
    });
  }
};
