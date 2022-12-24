'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('providers', [{
      id: 1,
      name: 'CEDENTE 002',
      tradingName: 'CEDENTE 002 LTDA',
      createdAt: '2020-10-29 21:22:21',
      updatedAt: '2020-10-29 21:22:22',
      cnpjId: 2
    }], {})
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('providers', null, {})
  }
}
