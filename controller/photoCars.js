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

exports.getPhoto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await photoUsecase.getPhoto(id);
    if (!data) {
      return next({
        message: `Photo with id ${id} is not found!`,
        statusCode: 404,
      });
    }

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
