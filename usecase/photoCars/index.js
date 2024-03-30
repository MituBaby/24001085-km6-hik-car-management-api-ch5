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
  // update old data
  await photoRepo.updatePhoto(id, payload);

  // find the new data
  const data = await photoRepo.getPhoto(id);

  return data;
};
