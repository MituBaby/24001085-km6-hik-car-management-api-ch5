const photoUsecase = require("../usecase/photoCars");

exports.getPhotos = async (req, res, next) => {
  try {
    const data = await photoUsecase.getPhotos();

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
