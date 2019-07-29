'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_mail_scheduler', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      mailTemplateId: { type: Sequelize.UUID, references: { model: 'tbl_mail_template', key: '_id' }, allowNull: false },
      mailRegisterIds: { type: Sequelize.ARRAY(Sequelize.TEXT), defaultValue: [] },
      scheduler: { type: Sequelize.STRING },
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
    return await queryInterface.dropTable('tbl_mail_scheduler');
  }
};
