'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_contact', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      fullName: { type: Sequelize.STRING, alowNull: false },
      phone: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING, validate: { isEmail: true, notEmpty: false } },
      body: { type: Sequelize.TEXT },
      appId: { type: Sequelize.UUID, references: { model: 'tbl_app', key: '_id' }, alowNull: false },
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
    return await queryInterface.dropTable('tbl_contact');
  }
};
