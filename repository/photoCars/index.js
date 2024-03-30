const crypto = require("crypto");
const path = require("path");
const { cars, photoCars } = require("../../models");
const { uploader } = require("../../helper/cloudinary");
const { getData, setData, deleteData } = require("../../helper/redis");

exports.getPhotos = async () => {
  const data = await photoCars.findAll({
    include: {
      model: cars,
    },
  });
  return data;
};

exports.getPhoto = async (id) => {
  const key = `cars:${id}`;

  // get from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // get from db
  data = await photoCars.findAll({
    where: {
      id,
    },
    include: {
      model: cars,
    },
  });
  if (data.length > 0) {
    // save to redis
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Photo is not found!`);
};
