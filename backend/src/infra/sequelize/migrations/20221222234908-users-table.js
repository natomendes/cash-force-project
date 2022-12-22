'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      mobile: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      departament: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      verificationCode: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      emailChecked: {
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
      cashforceAdm: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users')
  }
}
