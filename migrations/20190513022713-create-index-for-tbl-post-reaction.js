'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addIndex('tbl_post_reaction', ['userId','postId',"postAuthorId"], {
      indexName: 'post_reaction_unique',
      indicesType: 'UNIQUE',
      where: {
        deletedAt: null
      }
    })
  },

  down: async function (queryInterface, Sequelize) {
    return await queryInterface.removeIndex(
      'tbl_post_reaction', 
      'post_reaction_unique')
  }
};