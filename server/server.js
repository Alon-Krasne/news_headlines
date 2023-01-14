const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getNews, categories } = require("./services/news");
const { v4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Caches, can be replaced with a database or a cache server
const requests_cache = new Map();
const articles_cache = new Map();

app.get("/categories", (req, res, next) => {
  res.status(200).json(categories);
});

app.get("/news/:articleId", (req, res, next) => {
  const articleId = req.params.articleId;
  const article = articles_cache[articleId];
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
});

app.get("/news", (req, res, next) => {
  const keywords = req.query.keywords;
  const category = req.query.category;

  if (
    !keywords ||
    typeof keywords !== "string" ||
    (!categories.includes(category) && category !== "all")
  ) {
    return res.status(400).json({ error: "Bad request" });
  }

  if (requests_cache.has(`${keywords} ${category}`)) {
    res.status(200).json(requests_cache.get(`${keywords} ${category}`));
  } else {
    getNews(keywords, category)
      .then((data) => {
        const newsWithId = data.map((news, index) => {
          news.id = `'${v4()}'`;
          articles_cache[news.id] = news;
          return news;
        });
        requests_cache.set(`${keywords} ${category}`, data);
        res.status(200).json(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: error.message });
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
