'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_product', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      name: { type: Sequelize.STRING },
      shortDescription: { type: Sequelize.STRING },
      thumb: { type: Sequelize.STRING },
      images: { type: Sequelize.ARRAY(Sequelize.TEXT) },
      price: { type: Sequelize.INTEGER },
      description: { type: Sequelize.TEXT },
      ingredient: { type: Sequelize.STRING },
      metaTitle: { type: Sequelize.TEXT },
      metaDescription: { type: Sequelize.TEXT },
      viewCount: { type: Sequelize.INTEGER },
      productCategoryId: { type: Sequelize.UUID, references: { model: 'tbl_product_category', key: '_id' } },
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
    return await queryInterface.dropTable('tbl_product');
  }
};
