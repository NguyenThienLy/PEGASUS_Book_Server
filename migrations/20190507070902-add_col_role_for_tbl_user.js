'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_user',
        'avatar',
        { type: Sequelize.STRING }
      )
      await queryInterface.addColumn(
        'tbl_user',
        'cover',
        { type: Sequelize.STRING }
      ),
      await queryInterface.addColumn(
        'tbl_user',
        'role',
        { type: Sequelize.STRING, defaultValue: "guest" }
      )
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_user',
        'avatar'
      )
      await queryInterface.removeColumn(
        'tbl_user',
        'cover'
      ),
      await queryInterface.removeColumn(
        'tbl_user',
        'role'
      )
    });
  }
};
