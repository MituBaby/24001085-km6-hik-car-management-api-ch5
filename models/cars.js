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
      manufacture:DataTypes.STRING,
      type:DataTypes.STRING,
      transmission:DataTypes.STRING,
      description:DataTypes.STRING,
      photo: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "cars",
      paranoid: true,
    }
  );
  return cars;
};
