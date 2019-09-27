const mongoose = require("mongoose");

module.exports = async dbUrl => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("База данных подключена!");
  } catch (err) {
    console.error("Ошибка подключения Базы Данных", err);
  }
};
