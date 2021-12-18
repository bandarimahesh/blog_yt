const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
      unique: true,
    },
    description: { type: "string", required: true, unique: true },
    photo: { type: "string", required: false },
    username: { type: "string", required: true },
    categories: { type: Array, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostsSchema);
