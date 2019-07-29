'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addIndex('tbl_book', ['slug'], {
      indexName: 'slug_unique',
      indicesType: 'UNIQUE',
      where: {
        deletedAt: null
      }
    })
  },

  down: async function (queryInterface, Sequelize) {
    return await queryInterface.removeIndex(
      'tbl_book', 
      'slug_unique')
  }
};