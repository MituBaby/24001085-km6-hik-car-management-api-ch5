const carsUsecase = require("../usecase/cars");

exports.getCars = async (req, res, next) => {
  try {
    const data = await carsUsecase.getCars();

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await carsUsecase.getCar(id);
    if (!data) {
      return next({
        message: `Cars with id ${id} is not found!`,
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

exports.createCars = async (req, res, next) => {
  try {
    const { 
      name,
      rentPerDay,
      manufacture,
      type,
      transmission,
      description,
     } = req.body;
     const { photo } = req.files;
    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }
    if (!rentPerDay || rentPerDay < 1000000) {
      return next({
        message: "Cost rent must be provided!",
        statusCode: 400,
      });
    }
    if (!manufacture || manufacture == "") {
      return next({
        message: "Manufacture must be provided!",
        statusCode: 400,
      });
    }
    if (!type || type == "") {
      return next({
        message: "Type must be provided!",
        statusCode: 400,
      });
    }
    if (!transmission || transmission == "") {
      return next({
        message: "Transmission must be provided!",
        statusCode: 400,
      });
    }
    if (!description || description == "") {
      return next({
        message: "Description must be provided!",
        statusCode: 400,
      });
    }

    const data = await carsUsecase.createCars({
      name,
      rentPerDay,
      manufacture,
      type,
      transmission,
      description,
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

exports.updateCars = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { 
      name,
      rentPerDay,
      manufacture,
      type,
      transmission,
      description,
     } = req.body;
     const { photo } = req.files;
    if (!name || name == "") {
      return next({
        message: "Name must be provided!",
        statusCode: 400,
      });
    }
    if (!rentPerDay || rentPerDay < 1000000) {
      return next({
        message: "Cost rent must be provided!",
        statusCode: 400,
      });
    }
    if (!manufacture || manufacture == "") {
      return next({
        message: "Manufacture must be provided!",
        statusCode: 400,
      });
    }
    if (!type || type == "") {
      return next({
        message: "Type must be provided!",
        statusCode: 400,
      });
    }
    if (!transmission || transmission == "") {
      return next({
        message: "Transmission must be provided!",
        statusCode: 400,
      });
    }
    if (!description || description == "") {
      return next({
        message: "Description must be provided!",
        statusCode: 400,
      });
    }

    const data = await carsUsecase.updateCars(id, { 
      name,
      rentPerDay,
      manufacture,
      type,
      transmission,
      description, 
      photo,
    });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCars = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await carsUsecase.deleteCars(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
