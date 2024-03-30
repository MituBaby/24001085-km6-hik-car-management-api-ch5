const carsRepo = require("../../repository/cars");

exports.getCars = async () => {
  const data = await carsRepo.getCars();
  return data;
};

exports.getCar = async (id) => {
  const data = await carsRepo.getCar(id);
  return data;
};

exports.createCars = async (payload) => {
  const data = await carsRepo.createCars(payload);
  return data;
};
