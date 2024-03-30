const carsRepo = require("../../repository/cars");

exports.getCars = async () => {
  const data = await carsRepo.getCars();
  return data;
};
