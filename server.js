const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const articlesInfo = {
  "learn-tech": {
    comments: [],
  },
  "read-books": {
    comments: [],
  },
  "build-ai": {
    comments: [],
  },
  "travel-tips": {
    comments: [],
  },
};
// Initialize middleware
// we use to have to install body parser but now it is a build in middleware
// function of express. It parsers incoming JSON payload
app.use(express.json({ extended: false }));

app.post('/api/articles/:name/add-comments', (req, res) => {
  const {username, text} = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(8000, () => console.log(`Server started at port ${PORT}`));
