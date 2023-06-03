const express = require('express');
const router = express.Router();

const { addNewOutfit, getAllOutfits } = require('../controllers/authController')

router.route("/addoutfit").post(addNewOutfit);
router.route("/getoutfit").get(getAllOutfits);


module.exports = router;