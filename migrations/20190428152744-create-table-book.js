'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_book', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      title: { type: Sequelize.TEXT, alowNull: false },
      rate: { type: Sequelize.INTEGER, defaultValue: 0 },
      thumb: { type: Sequelize.STRING },
      images: { type:  Sequelize.ARRAY(Sequelize.TEXT) },
      status: { type: Sequelize.STRING, allowNull: false, defaultValue: "pending" },
      authorId: { type: Sequelize.UUID, references: { model: 'tbl_book_author', key: '_id' }, allowNull: false },
      publishedId: { type: Sequelize.UUID, references: { model: 'tbl_publisher', key: '_id' }},
      categoryId: { type: Sequelize.UUID, references: { model: 'tbl_book_category', key: '_id' }} ,
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
    return await queryInterface.dropTable('tbl_book');
  }
};
