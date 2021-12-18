const router = require("express").Router();
const CategoryModel = require("../models/CategoryModel");

router.post("/", async (req, res) => {
  const newCat = new CategoryModel(req.body);
  try {
    const saveCat = await newCat.save();
    res.status(200).json(saveCat);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const cat = await CategoryModel.find();
    res.status(200).json(cat);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
module.exports = router;
