const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("");//создать файл и заимпортить
const errorHandler = require("./utils/errorHandler");
// const router = require('./');

// const staticPublicPath = path.join(__dirname, '../public');

const startServer = port => {
  app
    .use(express.json())
    .use(cors("*"))
    .disable("x-powered-by")
    .use(
      morgan(":method :url :status :res[content-length] - :response-time ms")
    ) //В консоли показывает действие
    // .use("/", router);
    .use(errorHandler);

  app.listen(port);
  console.log(`сервер запущен на порту ${port}`);
};
module.exports = startServer;
