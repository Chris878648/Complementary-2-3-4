import express from "express";

const app = express();

// Middleware simple
app.use(express.json());

// Salud
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// Raíz
app.get("/", (_req, res) => {
  res.status(200).send("Hello World from my API");
});

// Ejemplo usando secreto
app.get("/secret-check", (_req, res) => {
  const hasKey = Boolean(process.env.API_KEY);
  res.json({ apiKeyConfigured: hasKey });
});

export default app;