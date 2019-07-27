'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_request_create_book', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      bookName: { type: Sequelize.STRING, allowNull: false },
      authorName: { type: Sequelize.STRING, allowNull: false },
      note: { type: Sequelize.TEXT },
      status: { type: Sequelize.STRING, allowNull: false, defaultValue: "active" },
      userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, alowNull: false },
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
    return await queryInterface.dropTable('tbl_request_create_book');
  }
};
