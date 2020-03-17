import express from "express";
import { config } from "dotenv";
import accountsRouter from "./src/routes/accounts";
import coursesRouter from "./src/routes/courses";
import {
  configureExpress,
  setupExternalMiddleware,
  establishConnection,
  listen
} from "./src/configuration";

const app = express();

// setup dotenv to load .env variables
config();

// configure app
configureExpress(app);

// setup middleware
setupExternalMiddleware(app);

// try connecting to the Database
establishConnection();

app.use("/courses", coursesRouter);
app.use("/accounts", accountsRouter);

// listen to port setup on configuration file
listen(app);
