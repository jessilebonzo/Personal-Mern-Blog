const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));


const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db("personalmernblog");
    await operations(db);
    client.close();
  } catch (error) {
    console.log(error); // Log error for debugging
    res.status(500).json({ message: "Error connecting to database", error });
  }
};


app.get('/api/articles/:name', async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
      
    if (articleInfo) {
      res.status(200).json({ id: articleInfo._id, name: articleInfo.name, comments: articleInfo.comments });
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  }, res);
});


app.post('/api/articles/:name/add-comments', (req, res) => {

const { username, text } = req.body;
const articleName = req.params.name;
withDB(async (db) => {
  const articleInfo = await db
    .collection("articles")
    .findOne({ name: articleName });
  
  if (articleInfo) {
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text })
        },
      }
    );

    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
}, res);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));