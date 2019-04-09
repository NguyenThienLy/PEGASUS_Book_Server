'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_product_category', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      name: { type: Sequelize.STRING },
      thumb: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      metaTitle: { type: Sequelize.TEXT },
      metaDescription: { type: Sequelize.TEXT },
      shopId: { type: Sequelize.UUID, references: { model: 'tbl_shop', key: '_id' } },
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
    return await queryInterface.dropTable('tbl_product_category');
  }
};
