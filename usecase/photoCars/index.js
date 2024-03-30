const photoRepo = require("../../repository/photoCars");

exports.getPhotos = async () => {
  const data = await photoRepo.getPhotos();
  return data;
};

exports.getPhoto = async (id) => {
  const data = await photoRepo.getPhoto(id);
  return data;
};

exports.createPhoto = async (payload) => {
  const data = await photoRepo.createPhoto(payload);
  return data;
};

exports.updatePhoto = async (id, payload) => {
  await photoRepo.updatePhoto(id, payload);

  const data = await photoRepo.getPhoto(id);

  return data;
};

exports.deletePhoto = async (id) => {
  const data = await photoRepo.deletePhoto(id);
  return data;
};
