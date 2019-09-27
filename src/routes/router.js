const express = require("express");
constrouter = express.Router();
const createTrip = require("../controllers/trips/createTrip");
// const { middleware } = require('../middleware');//

const noSuchPageHandler = (req, res) => {
  res.status(404).json({
    status: "error",
    message: "No such page!"
  });
};

router
  .get("/", (req, res) => {
    res.end("Basic api response");
  })
  .post("trips/file", addTrip, createTrip) //Добавить поездку в дб
  .get("/trips", getTrips); // Получить все поездки из дб

module.exports = router;
