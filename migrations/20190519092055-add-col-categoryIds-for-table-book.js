'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_book',
        'categoryIds',
        { type: Sequelize.ARRAY({ type: Sequelize.UUID, references: { model: 'tbl_book_category', key: '_id' } }), defaultValue: [] }
      )
      
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_book',
        'categoryIds'
      )
      
    });
  }
};
