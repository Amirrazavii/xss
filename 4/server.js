const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const userInput = req.query.input || "Default Value";
  const htmlResponse = `<p>Your input: ${userInput}</p>`;
  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
