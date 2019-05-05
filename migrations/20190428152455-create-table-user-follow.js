'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_user_follow', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        fromId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
        toId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
        isAccept: { type: Sequelize.BOOLEAN, defaultValue: false },
      createdAt: {
        type: 'TIMESTAMP',
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        allowNull: false
      },
      deletedAt: { type: 'TIMESTAMP' }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('tbl_user_follow');
  }
};
