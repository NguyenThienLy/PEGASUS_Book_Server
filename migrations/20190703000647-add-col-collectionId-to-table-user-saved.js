'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_user_saved',
        'collectionId',
        { type: Sequelize.UUID, references: { model: 'tbl_user_save_collection', key: '_id' } }
      )
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_user_saved',
        'collectionId'
      )
    });
  }
};
