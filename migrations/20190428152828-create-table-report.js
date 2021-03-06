'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_report', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
        postId: { type: Sequelize.UUID, references: { model: 'tbl_post', key: '_id' }},
        reason: { type: Sequelize.TEXT },
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
    return await queryInterface.dropTable('tbl_report');
  }
};
