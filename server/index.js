const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const multer = require("multer");
const helmet = require("helmet");
const dotenv = require("dotenv");
dotenv.config();

// importing routes
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");
const categoryRoute = require("./routes/categories.js");
// connection database
mongoose.connect(process.env.CONNECTION_URL, (err, db) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("connected to db");
  }
});
// applying middleware
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

// images storing

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "filename");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
const port = process.env.PORT || 5100;
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
