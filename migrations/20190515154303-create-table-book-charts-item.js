'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_book_charts_item', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      bookChartsId: { type: Sequelize.UUID, references: { model: 'tbl_book_charts', key: '_id' }, allowNull: false},
      bookId:  { type: Sequelize.UUID, references: { model: 'tbl_book', key: '_id' }, allowNull: false},
      averageScore : { type: Sequelize.INTEGER },
      totalScore: { type: Sequelize.INTEGER },
      totalDenominator: { type: Sequelize.INTEGER },
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
    return await queryInterface.dropTable('tbl_book_charts_item');
  }
};
