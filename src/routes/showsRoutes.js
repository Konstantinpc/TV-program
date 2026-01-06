const express = require("express");
const router = express.Router();
const showsController = require("../controllers/showsController");

// getAllShowsByDuration() - GET
router.get("/", (req, res) => showsController.getAllShowsByDuration(req, res));

// addShow() - POST
router.post("/", (req, res) => showsController.addShow(req, res));

// editShow() - PUT (showID as param)
router.put("/:id", (req, res) => showsController.editShow(req, res));

// deleteShow() - DELETE (showID as query param)
router.delete("/", (req, res) => showsController.deleteShow(req, res));

module.exports = router;
