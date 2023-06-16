const express = require("express");
const router = express.Router();

const {
  addNewCloset,
  getAllCloset,
} = require("../controllers/closetController.js");

router.route("/addcloset").post(addNewCloset);
router.route("/getcloset").get(getAllCloset);

module.exports = router;
