'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_user', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        password: { type: Sequelize.TEXT },
        firebaseUid: { type: Sequelize.TEXT },
        firebaseUserInfo: { type: Sequelize.JSONB },
        username: { type: Sequelize.STRING },
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING, unique: true, validate: { isEmail: true, notEmpty: true }},
        description: { type: Sequelize.TEXT },
        birthday: { type: Sequelize.DATE },
        quote: { type: Sequelize.STRING },
        job: { type: Sequelize.STRING },
        score: { type: Sequelize.INTEGER, defaultValue: 0 },
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
