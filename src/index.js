import express from "express";

import { connectDB } from "./config/connect.js";

import apiRoutes from "./routes/index.js";

import passport from "passport";

import { passportAuth } from "./config/jwt-middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

passportAuth(passport);

app.use("/api", apiRoutes);

app.listen(8000, async () => {
  console.log(`server is running at port 8000`);

  await connectDB();
  console.log("MongoDB Connected");
});
