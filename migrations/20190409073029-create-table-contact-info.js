'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_contact_info', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      title: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING, validate: { isEmail: true, notEmpty: false } },
      phones: { type: Sequelize.ARRAY(Sequelize.TEXT)},
      address: { type: Sequelize.ARRAY(Sequelize.TEXT) },
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
    return await queryInterface.dropTable('tbl_contact_info');
  }
};
