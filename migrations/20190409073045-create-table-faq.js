'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_faq', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      question: { type: Sequelize.STRING },
      answer: { type: Sequelize.TEXT },
      faqCategoryId: { type: Sequelize.UUID, references: { model: 'tbl_faq_category', key: '_id' }, alowNull: false },
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
    return await queryInterface.dropTable('tbl_faq');
  }
};
