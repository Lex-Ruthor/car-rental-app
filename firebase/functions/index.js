const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { generateResponse } = require("./chatbot");

const app = express();

// Enable CORS for frontend clients
app.use(cors({ origin: true }));

// Parse JSON request body
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "Missing 'message' in request body" });
  }

  const reply = await generateResponse(userMessage);
  res.json({ reply });
});

// Firebase Function Export
exports.chatbot = functions.https.onRequest(app);
