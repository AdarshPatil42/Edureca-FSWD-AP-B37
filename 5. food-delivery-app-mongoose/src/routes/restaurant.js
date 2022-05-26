
const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurant");
const mcontroller = require("../controllers/menu");


router.post("/", controller.add);
router.get("/:page", controller.get);
router.post("/menu", mcontroller.add);



module.exports = router;