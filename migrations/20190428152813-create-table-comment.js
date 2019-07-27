'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tbl_comment', {
      _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
      postId: { type: Sequelize.UUID, references: { model: 'tbl_post', key: '_id' }},
      parentId: { type: Sequelize.UUID, references: { model: 'tbl_comment', key: '_id' }},
      content: { type: Sequelize.TEXT },
      attachment: { type: Sequelize.STRING },
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
    return await queryInterface.dropTable('tbl_comment');
  }
};
