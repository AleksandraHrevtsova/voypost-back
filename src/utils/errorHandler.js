const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    err: err.message,
    message: "something goes wrong! server handleErro"
  });
  next();
};
module.exports = errorHandler;
