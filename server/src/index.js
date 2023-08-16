import express from "express";
import "dotenv/config.js";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { createError, errorHandler } from "./utils/handleError.js";
import createRoute from "./routes/index.js";
import connectDB from "./configs/connectDB.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(
  helmet({
    hsts: {
      // 60 days
      maxAge: 86400,
      // removing the "includeSubDomains" option
      includeSubDomains: false,
    },
  })
);
app.use(cors());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(morgan("dev"));

createRoute(app);
connectDB();

app.all("*", (req, res, next) => {
  next(createError(404, "Resource not found"));
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}: http://localhost:${port}`);
});
