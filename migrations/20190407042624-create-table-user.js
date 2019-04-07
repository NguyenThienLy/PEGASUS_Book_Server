'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_user', {
      _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true
        }
      },
      displayName: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      firebaseUid: {
        type: Sequelize.TEXT
      },
      firebaseUserInfo: {
        type: Sequelize.JSONB
      },
      role: {
        type: Sequelize.ENUM('admin','editor','salesman','read')
      },
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
    return await queryInterface.dropTable('tbl_user');
  }
};
