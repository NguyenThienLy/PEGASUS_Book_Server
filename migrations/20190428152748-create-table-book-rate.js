'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_book_rate', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
      bookId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
      rate: { type: Sequelize.INTEGER,  alowNull: false ,validate: { max: 10, min: 1 } },
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
    return await queryInterface.dropTable('tbl_book_rate');
  }
};
