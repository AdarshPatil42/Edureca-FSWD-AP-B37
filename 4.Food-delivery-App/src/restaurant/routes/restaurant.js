// Routing of express
const express = require("express");
const controller = require("../controllers/restaurant");

// create router
const router = express.Router();

router.post("/", controller.add);
router.get("/", controller.get);
router.get("/location/:city", controller.getByLocation);
router.put("/", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;