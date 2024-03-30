"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cars.hasMany(models.photoCars, { foreignKey: "cars_id" });
    }
  }
  cars.init(
    {
      name: DataTypes.STRING,
      rentPerDay: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "cars",
    }
  );
  return cars;
};
