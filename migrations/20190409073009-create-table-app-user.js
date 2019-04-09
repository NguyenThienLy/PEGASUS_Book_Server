'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_app_user', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      appId: { type: Sequelize.UUID, references: { model: 'tbl_app', key: '_id' }, allowNull: false },
      userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, allowNull: false, unique: 'UserAppIndex' },
      role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'staff' },
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
    return await queryInterface.dropTable('tbl_app_user');
  }
};
