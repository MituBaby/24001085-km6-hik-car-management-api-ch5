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

exports.getCar = async (id) => {
  const key = `cars:${id}`;

  let data = await getData(key);
  if (data) {
    return data;
  }

  data = await cars.findAll({
    where: {
      id,
    },
    include: {
      model: photoCars,
    },
  });
  if (data.length > 0) {
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Cars is not found!`);
};

exports.createCars = async (payload) => {
  const data = await cars.create(payload);

  const key = `cars:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateCars = async (id, payload) => {
  const key = `cars:${id}`;

  await cars.update(payload, {
    where: {
      id,
    },
  });

  const data = await cars.findAll({
    where: {
      id,
    },
    include: {
      model: photoCars,
    },
  });
  if (data.length > 0) {
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Cars is not found!`);
};

exports.deleteCars = async (id) => {
  const key = `cars:${id}`;

  await cars.destroy({ where: { id } });

  await deleteData(key);

  return null;
};
