'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderPath: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true
      },
      orderFileName: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true
      },
      emissionDate: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      pdfFile: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nNf: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      CTE: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      value: {
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
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'cnpjs',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      buyerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'buyers',
          key: 'id'
        }
      },
      providerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'providers',
          key: 'id'
        }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        defaultValue: null
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('orders')
  }
}
