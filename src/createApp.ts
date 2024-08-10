import express from "express";
import usersRouter from "./routes/users";

export const createApp = () => {
  const app = express();

  app.use("/api/users", usersRouter);

  return app;
};
