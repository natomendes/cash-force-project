'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cnpjs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cnpj: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      companyType: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('cnpjs')
  }
}
