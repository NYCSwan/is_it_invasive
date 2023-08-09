import path from "path";
import express from "express";
import cors from "cors";

const app = express();

const OPENIA_KEY = process.env.OPEN_AI_KEY;

app.use(cors());
app.use(express.json()); // parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));

app.post("/api/chat", async (req, res) => {});

app.get("/api/genera/:genusName", async (req, res) => {}); // aka genuses

// app.post("/api/image", async (req, res) => {});

// app.post("/api/recipe", async (req, res) => {});

export default app;
