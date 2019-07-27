'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_admin', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      firebaseUserUid: { type: Sequelize.STRING, allowNull: false },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      role: { type: Sequelize.STRING, defaultValue: "reporter" },
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
    return await queryInterface.dropTable('tbl_admin');
  }
};
