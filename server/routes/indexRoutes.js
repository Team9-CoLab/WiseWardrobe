const express = require("express");
const router = express.Router();

const {
  addNewCloset,
  getAllCloset,
} = require("../controllers/closetController.js");

const { 
  addNewOutfit, 
  getAllOutfits
} = require('../controllers/outfitController.js');

//fot closet call
router.route("/addcloset").post(addNewCloset);
router.route("/getcloset").get(getAllCloset);


//for outfit call
router.route("/addoutfit").post(addNewOutfit);
router.route("/getoutfit").get(getAllOutfits);

module.exports = router;
