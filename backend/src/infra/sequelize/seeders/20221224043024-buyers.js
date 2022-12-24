'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('buyers', [{
      id: 1,
      name: 'SACADO 001',
      tradingName: 'SACADO 001 LTDA',
      cashforceTax: '0',
      createdAt: '2020-10-29 21:20:33',
      updatedAt: '2020-10-29 21:20:34',
      cnpjId: 1,
      confirm: 1
    }], {})
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('buyers', null, {})
  }
}
