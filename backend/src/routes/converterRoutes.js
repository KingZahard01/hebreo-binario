// routes/converterRoutes.js
const express = require("express");
const router = express.Router();
const ConverterController = require("../controllers/converterController");

const controller = new ConverterController();

router.post("/convert", controller.convertText.bind(controller));

module.exports = router;
