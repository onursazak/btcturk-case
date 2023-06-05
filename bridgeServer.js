import axios from "axios";
import express from "express";
import cors from "cors";
import { mockSources } from "./src/mockData/mockSources.js";
import { mockHeadline } from "./src/mockData/headlines.js";

const app = express();
const port = 3000;

app.use(cors());

app.get("/sources", async (req, res) => {
  const { apiKey, language } = req.query;
  const url = new URL("https://newsapi.org/v2/top-headlines/sources");

  url.searchParams.set("language", language);
  url.searchParams.set("apiKey", apiKey);

  // Send the actual data if there is no error in the newsapi.
  // Send the the hardcoded example data if there is a problem in the newsapi.
  try {
    const data = await axios.get(url.toString());
    res.send(data.data);
  } catch (error) {
    res.send(mockSources);
  }
});

app.get("/headlines", async (req, res) => {
  const { apiKey, sources } = req.query;

  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.set("apiKey", apiKey);
  url.searchParams.set("sources", sources);

  // Send the actual data if there is no error in the newsapi.
  // Send the the hardcoded example data if there is a problem in the newsapi.
  try {
    const data = await axios.get(url.toString());
    res.send(data.data);
  } catch (error) {
    res.send(mockHeadline);
  }
});

app.listen(port, () => {
  console.log(`Bridge server listening on port ${port}`);
});
