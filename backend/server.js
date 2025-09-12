import express from "express";
import axios from "axios";
import cors from "cors";
import NodeCache from "node-cache";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const cache = new NodeCache({ stdTTL: 60 * 60 * 12 }); 
console.log("Loaded API Key:", process.env.WATCHMODE_API_KEY ? "✅ Present" : "❌ Missing");

app.use(cors());
app.use(express.json());

const WATCHMODE_BASE = "https://api.watchmode.com/v1";
const API_KEY = process.env.WATCHMODE_API_KEY;
if (!API_KEY) {
  console.error("ERROR: WATCHMODE_API_KEY not set in environment!");
}

function cacheMiddleware(req, res, next) {
  const key = req.originalUrl;
  const cached = cache.get(key);
  if (cached) {
    return res.json(cached);
  }
  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(key, body);
    res.sendResponse(body);
  };
  next();
}

app.get("/api/movies/popular", cacheMiddleware, async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(`${WATCHMODE_BASE}/list-titles/`, {
      params: {
        apiKey: API_KEY,
        types: "movie",
        sort_by: "popularity_desc",
        page,
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error("WatchMode /popular error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch popular movies" });
  }
});

app.get("/api/movies/trending", cacheMiddleware, async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(`${WATCHMODE_BASE}/list-titles/`, {
      params: {
        apiKey: API_KEY,
        types: "tv_series",
        sort_by: "popularity_desc",
        page,
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error("WatchMode /trending error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch trending shows" });
  }
});

app.get("/api/movies/genre/:genreId", cacheMiddleware, async (req, res) => {
  try {
    const { genreId } = req.params;
    const page = req.query.page || 1;
    const response = await axios.get(`${WATCHMODE_BASE}/list-titles/`, {
      params: {
        apiKey: API_KEY,
        types: "movie",
        genres: genreId,
        page,
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error("WatchMode /genre error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch genre movies" });
  }
});

app.get("/api/movies/search", cacheMiddleware, async (req, res) => {
  try {
    const query = req.query.q || "";
    const response = await axios.get(`${WATCHMODE_BASE}/search/`, {
      params: {
        apiKey: API_KEY,
        search_field: "name",
        search_value: query,
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error("WatchMode search error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to search movies" });
  }
});

app.get("/api/movies/:id", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${WATCHMODE_BASE}/title/${req.params.id}/details/`, {
      params: { apiKey: API_KEY },
    });
    res.json(response.data);
  } catch (err) {
    console.error("WatchMode details error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
