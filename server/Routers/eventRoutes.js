const express = require("express");
const { addEventController, editEventController, deleteEventController } = require("../Controllers/eventController");
const authMiddleware = require("../Middlewares/authMiddleware");
const adminMiddleware = require("../Middlewares/adminMiddleware")

addEventController

const router = express.Router();

router.post("/add", authMiddleware, adminMiddleware ,addEventController);
router.put("/edit/:id", editEventController);
router.delete("/delete/:id", deleteEventController);

module.exports = router;