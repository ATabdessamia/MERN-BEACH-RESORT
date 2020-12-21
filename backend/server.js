import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import connectDb from "./utils/db.js";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";
import roomRouters from "./routers/roomRoutes.js";

dotenv.config();

connectDb();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/rooms", roomRouters);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  );
});
