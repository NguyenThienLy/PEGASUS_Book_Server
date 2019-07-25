'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_post',
        'requestCreateBookId',
        { type: Sequelize.UUID, references: { model: 'tbl_request_create_book', key: '_id' } }
      )
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_post',
        'requestCreateBookId'
      )
    });
  }
};
