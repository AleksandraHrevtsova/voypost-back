const path = require("path");
const tripsJson = require("../../db/trips.json");
const Trip = require("../../models/tripModel");

// .get("/trips", (req, res) => {
//   Trip.create({
//     fromName: "Berlin, Germany",
//     toName: "Kyiv, Ukraine",
//     departAt: "2019-05-29T00:00:00.000Z",
//     vehicle: "plane"
//   })
//     .then(trip => res.send(trip))
//     .catch(err => res.send(err));
//   Trip.find()
//     .then(trips => res.send(trips))
//     .catch(err => res.send(err));
// });
const createTrip = (req, res) => {
  console.log(req.file);
  const sendResponse = data => {
    res.json({
      status: "success",
      updateData: data
    });
  };
  const sendError = err => {
    res.status(400).json({
      err
    });
  };

  const tripsArray = tripsJson.map(trip => ({
    fromName: trip.fromName,
    toName: trip.toName,
    departAt: trip.departAt,
    vehicle: trip.vehicle
  }));
  Trip.insertMany(tripsArray, {
    bypassDocumentValidation: true,
    ordered: false,
    rawResult: false
  })
    .then(data => {
      sendResponse(data);
    })
    .then(() => {
      fs.unlink(tripsJson, err => {
        if (err) {
          console.error(err);
        }
        console.log(`${tripsArray} удален`);
      });
    })
    .catch(err => {
      sendError(err);
    });
};
console.log(tripsJson);
console.log(Trip);

module.exports = createTrip;
