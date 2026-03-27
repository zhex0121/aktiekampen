const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Example route to test server
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Example API route for stock prices
app.get("/api/price/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=d7245o9r01qjeeefroggd7245o9r01qjeeefroh0`);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching stock data" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));