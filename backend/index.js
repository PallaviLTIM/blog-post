const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const blogTypeRoute = require("./routes/blogTypeRoute");
const commentRoute = require("./routes/commentRoute");

const mongoString = process.env.DATABASE_URL;

// Connect to MongoDB database
mongoose
  .connect(mongoString)
  .then(() => {
    const app = express();

    app.use(cors());
    // app.use(express.json());

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use("/api", postRoute);
    app.use("/api", commentRoute);
    app.use("/api", userRoute);
    app.use("/api", blogTypeRoute);

    let PORT = process.env.PORT || 5000;

    app.listen(PORT, (err) => {
      const msg = err ? err : "Server is started....";
      console.log(msg);
    });
  })
  .then(() => console.log("DB connected successfully"))
  .catch((error) => console.log(error));
