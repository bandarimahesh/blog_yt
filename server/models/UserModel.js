const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
      unique: true,
    },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    profilePic: { type: "string", default: "" },
  },
  { timestamps :true}
);

module.exports = mongoose.model("User", UsersSchema);
