const express = require("express");

const app = express();

const port = 3020;

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
  });