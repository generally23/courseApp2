import { connect } from "mongoose";
import { resolve } from "path";
import cookieParser from "cookie-parser";
import express from "express";

export const establishConnection = async () => {
  try {
    const connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    };
    await connect("mongodb://localhost/course_db", connectionOptions);
    console.log("Success connecting to DB");
  } catch (e) {
    console.log("Failed connecting to DB");
  }
};

export const configureExpress = app => {
  app.set("view engine", "pug");
  app.set("views", resolve(__dirname, "views"));
};

export const setupExternalMiddleware = app => {
  app.use(cookieParser());
  app.use(express.static(resolve(__dirname, "public")));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

export const listen = app => {
  app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Listening on port ?");
  });
};
