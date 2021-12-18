const router = require("express").Router();
const UserModel = require("../models/UserModel");
const PostModel = require("../models/PostModel");

// create Post
router.post("/", async (req, res) => {
  try {
    const createPost = await PostModel({
      title: req.body.title,
      description: req.body.description,
      username: req.body.username,
    });

    const result = await createPost.save();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// get all posts
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await PostModel.find({ username: username });
    } else if (catName) {
      posts = await PostModel.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await PostModel.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await PostModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(402).json(error.message);
      }
    } else {
      res.status(401).json("Sorry you are not allowed to update this post");
    }
  } catch (error) {
    res.status(500).json("You can't update others posts'");
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err.message);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// get post

router.get("/:id", async (req, res) => {
  try {
    const getPost = await PostModel.findById(req.params.id);
    res.status(200).json(getPost);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
module.exports = router;
