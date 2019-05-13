'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_post_reaction',
        'postAuthorId',
        { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }}
      )
      
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_post_reaction',
        'postAuthorId'
      )
      
    });
  }
};
