// app.js
const express = require("express");
const cors = require("cors");
const converterRoutes = require("./routes/converterRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", converterRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;
