const Closet = require("../models/closet.js");

const addNewCloset = async (req, res) => {
  try {
    const { brand, cloth_name, type, season, color, category, size, image } = req.body;
    console.log(req.body);

    //write data into database
    const closet = new Closet({
      brand,
      cloth_name,
      type,
      season,
      color,
      category,
      size,
      image,
    });
    await closet.save();

    // //read data from database
    // const usersData = await User.find({});
    res.status(201).json({ message: "success" });
  } catch (e) {
    console.log(e);
  }
};

const getAllCloset = async (req, res) => {
  try {
    const closetsData = await Closet.find({});
    res.status(200).json({ closetsData });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addNewCloset, getAllCloset };
