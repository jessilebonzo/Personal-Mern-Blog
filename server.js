const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json({ extended: false }));

// Helper function to connect to MongoDB and execute operations
const withDB = async (operations, res) => {
  try {
    // Use the MongoDB URI from environment variables
    const client = await MongoClient.connect(
      process.env.MONGODB_URI, // MongoDB URI is now sourced from environment variables
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db("personalmernblog"); // Ensure this matches your database name in MongoDB Atlas
    await operations(db);
    client.close();
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Error connecting to database", error });
  }
};

// GET endpoint to fetch article by name
app.get('/api/articles/:name', async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    if (articleInfo) {
      res.status(200).json({
        id: articleInfo._id,
        name: articleInfo.name,
        comments: articleInfo.comments,
      });
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  }, res);
});

// POST endpoint to add comments to an article
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
            comments: articleInfo.comments.concat({ username, text }),
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

// Export the app for serverless deployment
module.exports = app;
