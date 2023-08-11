const { json } = require("express");
const mongoose = require("mongoose");

const blogTypeSchema = new mongoose.Schema(
  {
    blogType: { type: String, require: true },
    isActive: { type: Boolean, require: true, default: true },
  },
  { collection: "blog-types" }
);

const myDB = mongoose.connection.useDb("blog-post-db");

module.exports = myDB.model("blog-types", blogTypeSchema);
