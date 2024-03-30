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
