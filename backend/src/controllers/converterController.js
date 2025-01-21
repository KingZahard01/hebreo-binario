// controllers/converterController.js
const HebrewConverter = require("../models/hebrewConverter");

class ConverterController {
  constructor() {
    this.converter = new HebrewConverter();
  }

  async convertText(req, res) {
    try {
      const { text } = req.body;

      if (!text) {
        return res.status(400).json({ error: "El texto es requerido" });
      }

      const result = this.converter.processText(text);

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
}

module.exports = ConverterController;
