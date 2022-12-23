'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nDup: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dVenc: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vDup: {
        type: Sequelize.STRING,
        allowNull: false
      },
      availableToMarket: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      orderId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'orders',
          key: 'id'
        }
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('orderportions')
  }
}
