const classUsecase = require("../usecase/cars");

exports.getCars = async (req, res, next) => {
  try {
    const data = await classUsecase.getCars();

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
