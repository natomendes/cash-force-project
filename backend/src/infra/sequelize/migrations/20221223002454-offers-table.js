'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tax: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adValorem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iof: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'sponsors',
          key: 'id'
        }
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('offers')
  }
}
