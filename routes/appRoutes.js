const express = require("express");
const router = express.Router();

const {getIndex} = require("../controllers/appControllers");

router.get("/",getIndex);


module.exports = router;