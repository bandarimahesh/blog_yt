const router = require("express").Router();
const UserModel = require("../models/UserModel");
const PostModel = require("../models/PostModel");
const bcrypt = require("bcrypt");
// update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const user = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("Successfully updated");
    } catch (error) {
      res.status(401).json(error.message);
    }
  } else {
    res.status(401).json("You can only update your account");
  }
});

// login
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const deleteUser = await UserModel.findById(req.params.userId);
      try {
        await PostModel.deleteMany({ username: deleteUser.username });
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Successfully deleted user");
      } catch (error) {
        res.status(401).json(error.message);
      }
    } catch (error) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can only delete your account");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(404).json("User not found");
  }
});
module.exports = router;
