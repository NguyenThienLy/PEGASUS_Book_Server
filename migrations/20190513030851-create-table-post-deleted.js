'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_post_deleted', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        title: { type: Sequelize.TEXT, alowNull: false },
        slug: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        postTemplate: { type: Sequelize.STRING },
        content: { type: Sequelize.TEXT },
        thumb: { type: Sequelize.STRING },
        images: { type:  Sequelize.ARRAY(Sequelize.TEXT) },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
        bookId: { type: Sequelize.UUID, references: { model: 'tbl_book', key: '_id' }},
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
    return await queryInterface.dropTable('tbl_post_deleted');
  }
};
