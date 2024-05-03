'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('cars', 'manufacture', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      }),
      queryInterface.addColumn('cars', 'type', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      }),
      queryInterface.addColumn('cars', 'transmission', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      }),
      queryInterface.addColumn('cars', 'description', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('cars', 'manufacture'),
      queryInterface.removeColumn('cars', 'type'),
      queryInterface.removeColumn('cars', 'transmission'),
      queryInterface.removeColumn('cars', 'description'),
    ]);
  }
};
