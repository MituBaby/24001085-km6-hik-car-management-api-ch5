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

exports.createPhoto = async (req, res, next) => {
  try {
    const { cars_id } = req.body;
    const { photo } = req.files; // get photo file
    if (!cars_id || cars_id <= 0) {
      return next({
        message: "Cars ID must be provided!",
        statusCode: 400,
      });
    }

    const data = await photoUsecase.createPhoto({
      cars_id,
      photo,
    });

    res.status(201).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePhoto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cars_id } = req.body;
    if (!cars_id || cars_id <= 0) {
      return next({
        message: "Cars ID be provided!",
        statusCode: 400,
      });
    }

    const data = await photoUsecase.updatePhoto(id, { cars_id });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deletePhoto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await photoUsecase.deletePhoto(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
