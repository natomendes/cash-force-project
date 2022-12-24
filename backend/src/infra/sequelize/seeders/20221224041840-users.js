'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'ALLAN SOUZA',
      email: 'allan@cashforce.com.br',
      password: '$2b$12$gcKI1mvRrYwljpxQur57SeMoG84c8vaUbxR1kz5IMnjnbnWYJbmUi',
      verificationCode: '',
      emailChecked: 1,
      createdAt: '2020-10-01 21:31:37',
      updatedAt: '2020-10-01 22:41:23',
      cashforceAdm: 1
    }], {})
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
