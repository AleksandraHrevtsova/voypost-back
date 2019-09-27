const mongoose = require("mongoose");

const { Schema } = mongoose;
const tripSchema = new Schema({
  fromName: {
    type: String
  },
  toName: {
    type: String
  },
  departAt: {
    type: Date
  },
  vehicle: {
    type: String
  }
});

// const tripSchema = new mongoose.Schema({
//   fromName: String,
//   toName: String,
//   departAt: Date,
//   vehicle: String
// });
module.exports = mongoose.model("Trips", tripSchema);
