const photoRepo = require("../../repository/photoCars");

exports.getPhotos = async () => {
  const data = await photoRepo.getPhotos();
  return data;
};
