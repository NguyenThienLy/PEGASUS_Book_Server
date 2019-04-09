'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_shop', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      name: { type: Sequelize.STRING },
      thumb: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      type: { type: Sequelize.STRING },
      appId: { type: Sequelize.UUID, references: { model: 'tbl_app', key: '_id' } },
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
    return await queryInterface.dropTable('tbl_shop');
  }
};
