const Tour = require("../models/tourModel");

exports.getAllTours = async (req, res, next) => {
  try {
    console.log("----------QUERY-------");

    //   BUILDING A QUERY

    //   creating a shallow copy of the req.query obj.
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    const queryObj = { ...req.query };
    //   fields to exclude while performing query.
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    console.log(req.query, queryObj);

    const query = Tour.find(queryObj);

    //   EXECUTE QUERY
    const tour = await query;

    console.log("-----ALL TOURS------", tour);

    //   SEND THE RESPONSE

    return res.status(200).json({
      status: "success",
      results: tour.length,
      tour,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      msg: err,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const tour = await Tour.create(req.body);
    console.log("----- newly created tour -----");
    console.log(tour);

    res.status(201).json({
      status: "success",
      tour,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      msg: "Invalid data",
    });
  }
};

exports.getTour = async (req, res, next) => {
  try {
    const tour = await Tour.findById(req.params.id);
    console.log("----GETTING TOUR WITH ID-------", tour);
    res.status(200).json({
      status: "ok",
      tour,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed to get tour with that id",
      msg: err,
    });
  }
};

exports.updateTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log("----GETTING TOUR TO UPDATE-------", tour);

    res.status(200).json({
      status: "success updating tour",
      tour,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed updating tour",
      msg: err,
    });
  }
};

exports.deleteTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    console.log("----GETTING TOUR TO Delete-------", tour);

    res.status(200).json({
      status: "success deleting tour",
      tour,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed deleting tour",
      msg: err,
    });
  }
};
