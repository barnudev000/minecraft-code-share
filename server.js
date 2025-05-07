const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const codes = {}; // { name: code }

app.use(express.json());
app.use(express.static("public"));

app.post("/submit", (req, res) => {
  const { name, code } = req.body;
  if (!name || !code) return res.status(400).send("Missing name or code");
  codes[name.trim()] = code.trim();
  res.sendStatus(200);
});

app.get("/codes", (req, res) => {
  res.json(codes);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
