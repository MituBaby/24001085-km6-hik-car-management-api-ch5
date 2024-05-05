'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("cars", "photo", {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: "",
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("cars", "photo");
  }
};
