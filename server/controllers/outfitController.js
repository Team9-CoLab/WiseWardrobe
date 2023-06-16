const Outfit = require("../model/user");

const addNewOutfit = async (req, res) => {
  try {
    const { brand, cloth, season, color, category, size, image } = req.body;
    console.log(req.body);

    //write data into database
    const outfit = new Outfit({
      brand,
      cloth,
      season,
      color,
      category,
      size,
      image,
    });
    await outfit.save();

    // //read data from database
    // const usersData = await User.find({});
    res.status(201).json({ message: "success" });
  } catch (e) {
    console.log(e);
  }
};

const getAllOutfits = async (req, res) => {
  try {
    const outfitsData = await User.find({});
    res.status(200).json({ outfitsData });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addNewOutfit, getAllOutfits };
