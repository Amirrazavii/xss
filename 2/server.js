const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware to parse incoming JSON requests and cookies
// app.use(express.json());
// app.use(cookieParser());

// Define a route to set cookies with different SameSite attributes
app.get("/set-cookies", (req, res) => {
  // Set a cookie with SameSite attribute set to Strict
  res.cookie("strictCookie", "strict-value", {
    sameSite: "Strict",
    secure: true,
    httpOnly: true,
  });

  // Set a cookie with SameSite attribute set to None (requires HTTPS)
  res.cookie("noneCookie", "none-value", {
    sameSite: "None",
    secure: true,
    httpOnly: true,
  });

  // Set a cookie with SameSite attribute set to Lax
  res.cookie("laxCookie", "lax-value", {
    sameSite: "Lax",
    secure: true,
    httpOnly: true,
  });

  res.send("Cookies have been set!");
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
