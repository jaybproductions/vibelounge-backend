const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const PORT = 91;
require("dotenv").config();
app.use(express.json());
app.use(helmet());
app.use(morgan("short"));
app.use(cors());

app.get("/v1/api", (req, res) => {
  res.json({ message: "Welcome to the Vibe Lounge API" });
});

app.get("/login", function (req, res) {
  var scopes = "user-read-private user-read-email streaming";
  res.send(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      process.env.SPOTIFY_CLIENT_ID +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(process.env.SPOTIFY_REDIRECT_URI)
  );
});

app.listen(PORT, () => {
  console.log(`Server is live on ${PORT}`);
});
