const express = require("express");
const { addEventController, editEventController, deleteEventController } = require("../Controllers/eventController");

addEventController

const router = express.Router();

router.post("/add", addEventController);
router.put("/edit/:id", editEventController);
router.delete("/delete/:id", deleteEventController);

module.exports = router;