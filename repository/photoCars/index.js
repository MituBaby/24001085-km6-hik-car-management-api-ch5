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
  const key = `photo:${id}`;

  let data = await getData(key);
  if (data) {
    return data;
  }

  data = await photoCars.findAll({
    where: {
      id,
    },
    include: {
      model: cars,
    },
  });
  if (data.length > 0) {
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Photo is not found!`);
};

exports.createPhoto = async (payload) => {
  if (payload.photo) {
    const { photo } = payload;

    photo.publicId = crypto.randomBytes(16).toString("hex");

    photo.name = `${photo.publicId}${path.parse(photo.name).ext}`;

    const imageUpload = await uploader(photo);
    payload.photo = imageUpload.secure_url;
  }

  const data = await photoCars.create(payload);

  const key = `photo:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updatePhoto = async (id, payload) => {
  const key = `photo:${id}`;

  if (payload.photo) {
    const { photo } = payload;

    photo.publicId = crypto.randomBytes(16).toString("hex");

    photo.name = `${photo.publicId}${path.parse(photo.name).ext}`;

    const imageUpload = await uploader(photo);
    payload.photo = imageUpload.secure_url;
  }

  await photoCars.update(payload, {
    where: {
      id,
    },
  });

  const data = await photoCars.findAll({
    where: {
      id,
    },
    include: {
      model: cars,
    },
  });
  if (data.length > 0) {
    await setData(key, data[0], 300);

    return data[0];
  }

  return data;
};

exports.deletePhoto = async (id) => {
  const key = `photo:${id}`;

  await photoCars.destroy({ where: { id } });

  await deleteData(key);

  return null;
};
