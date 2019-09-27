const Trip = require("../../models/tripModel");

const getTrips = (req, res) => {
  const tripId = req.Trip._id;

  const sendResponse = data => {
    res.json({
      status: "success",
      trip: data
    });
  };
  const sendError = (err, code) => {
    const status = code || 404;
    res.status(status).json({
      err,
      message: err.message
    });
  };
  Trip.findById(tropId)
    .then(trip => {
      console.log({ trip });
      const respData = {
        fromName: trip.fromName,
        toName: trip.toName,
        departAt: trip.departAt,
        vehicle: trip.vehicle
      };
      sendResponse(respData);
    })
    .catch(sendError);
};

module.exports = getTrips;
