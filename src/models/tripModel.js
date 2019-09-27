//model
const tripSchema = require("./tripSchema");
const Trip = mongoose.model("Trips", tripSchema);
module.exports = Trip;
