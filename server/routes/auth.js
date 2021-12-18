const router = require("express").Router();
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
// register
router.post("/register", async (req, res) => {
  try {
    const saltRounds = 10;
    const genSalt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, genSalt);

    const newUser = await UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = newUser.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// login

router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    !user && res.status(400).json("User not found");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong credentials");
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;
