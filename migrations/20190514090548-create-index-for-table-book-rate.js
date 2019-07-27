'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addIndex('tbl_book_rate', ['bookId','userId'], {
      indexName: 'book_rate_unique',
      indicesType: 'UNIQUE',
      where: {
        deletedAt: null
      }
    })
  },

  down: async function (queryInterface, Sequelize) {
    return await queryInterface.removeIndex(
      'tbl_book_rate', 
      'book_rate_unique')
  }
};