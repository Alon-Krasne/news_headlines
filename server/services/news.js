const axios = require("axios");

const apiKey = process.env.API_KEY;
const baseUrl = process.env.NEWS_URL || "https://newsapi.org/v2/top-headlines";

const categories = [
  "all",
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

async function getNews(keywords, category) {
  let url;
  if (category === "all") {
    url = `${baseUrl}?q=${keywords}&apiKey=${apiKey}`;
  } else {
    url = `${baseUrl}?q=${keywords}&category=${category}&apiKey=${apiKey}`;
  }
  const response = await axios.get(url);
  return response.data.articles;
}

module.exports = {getNews, categories};