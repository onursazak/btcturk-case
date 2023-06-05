const getSources = async () => {
  const url = new URL(import.meta.env.VITE_SOURCES_API_URL);

  url.searchParams.set("apiKey", import.meta.env.VITE_API_KEY);
  url.searchParams.set("language", "en");

  const response = await fetch(url.toString());
  const data = await response.json();
  const hasData = data && data.sources && data.sources.length > 1;

  if (!hasData) throw new Error("no data!");

  const categories = new Set();

  data.sources.forEach((source) => {
    categories.add(source.category);
  });

  data.categories = Array.from(categories);
  data.initialSources = data.sources;

  return data;
};

const getHeadLines = async (id) => {
  const url = new URL(import.meta.env.VITE_HEADLINES_API_URL);

  url.searchParams.set("apiKey", import.meta.env.VITE_API_KEY);
  url.searchParams.set("sources", id);

  const response = await fetch(url.toString());

  const data = await response.json();

  return {
    totalResults: data.totalResults,
    sliderData: data.articles.slice(0, 3),
    articles: data.articles.slice(3),
  };
};

export const API = {
  getSources,
  getHeadLines,
};
