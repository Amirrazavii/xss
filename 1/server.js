const express = require("express");

// Create an Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.cookie("exampleCookie1", "cookie-value", {
    maxAge: 900000,
    httpOnly: true,
  });
  res.cookie("exampleCookie2", "cookie-value", {
    maxAge: 900000,
    httpOnly: false,
  });

  res.send("Cookie has been set!");
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
