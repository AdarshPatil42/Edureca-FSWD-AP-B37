// Routing of express
const express = require("express");
const controller = require("../controllers/userController");


// create router
const router = express.Router();

router.post("/signup",controller.signup);
router.post("/signin",controller.signin);
router.post("/contactus",controller.contactus);


module.exports = router;