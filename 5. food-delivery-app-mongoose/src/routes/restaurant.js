
const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurant");
const mcontroller = require("../controlle)rs/menu");


router.post("/", controller.add);
router.get("/", controller.get);
// router.post("/menu", mcontroller.add);



module.exports = router;