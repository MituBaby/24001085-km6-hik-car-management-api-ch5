const { cars, photoCars } = require("../../models");

const { getData, setData, deleteData } = require("../../helper/redis");

exports.getCars = async () => {
  const data = await cars.findAll({
    include: {
      model: photoCars,
    },
  });
  return data;
};
