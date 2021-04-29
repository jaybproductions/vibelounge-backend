const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const PORT = 89;
app.use(express.json());
app.use(helmet());
app.use(morgan("short"));
app.use(cors());

app.get("/v1/api", (req, res) => {
  res.json({ message: "Welcome to the Vibe Lounge API" });
});

app.listen(PORT, () => {
  console.log(`Server is live on ${PORT}`);
});
