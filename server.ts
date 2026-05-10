import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Logging Middleware
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // CORS - Configure for both local dev and production
  app.use(cors({
    origin: ["http://localhost:3000", "https://kyah-andy.github.io"], 
    methods: ["GET", "POST"],
    credentials: true
  }));

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Server is reaching for the stars! 🚀" });
  });

  // Gemini API Endpoint
  app.post("/api/chat", async (req, res) => {
    const { message, context, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("[ERROR] GEMINI_API_KEY is not configured on the server.");
      return res.status(500).json({ error: "Server configuration error" });
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      // We combine the system context with the conversation history
      const fullHistory = [
        { role: "user", parts: [{ text: context || "" }] },
        ...(history || []).map((m: any) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }]
        }))
      ];

      const chat = model.startChat({
        history: fullHistory,
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
        },
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();

      console.log(`[CHAT SUCCESS] Prompt length: ${message.length}, Response length: ${text.length}`);
      res.json({ reply: text });
    } catch (error: any) {
      console.error("[CHAT ERROR]", error.message);
      res.status(500).json({ 
        error: "Failed to communicate with AI",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
