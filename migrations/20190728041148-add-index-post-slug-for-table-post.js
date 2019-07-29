'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addIndex('tbl_post', ['slug'], {
      indexName: 'post_slug_unique',
      indicesType: 'UNIQUE'
    })
  },

  down: async function (queryInterface, Sequelize) {
    return await queryInterface.removeIndex(
      'tbl_post', 
      'post_slug_unique')
  }
};