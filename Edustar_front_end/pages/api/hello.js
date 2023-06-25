const express = require("express");
const app = express();

// Add the following middleware before defining your routes
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Define your routes below
// ...

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});


// const { json } = require('body-parser');
// const express = require('express');
// const use = require('@tensorflow-models/universal-sentence-encoder');
// const util = require('util');
// const pandas = require('pandas-js');
// const { pipeline } = require('transformers');

// let embedder;
// const sentimentPipeline = pipeline('sentiment-analysis');

// const df = pandas.readCSV('coursea_data.csv');
// const qa = pandas.readCSV('qa.csv', { header: null });

// const corpus = df.iloc(':', 1).values.tolist();

// async function initializeEmbedder() {
//   embedder = await use.load();
// }

// initializeEmbedder();

// function review(text) {
//   return sentimentPipeline(text);
// }

// async function search(text) {
//   const top_k = Math.min(5, corpus.length);
//   const idxs = [];

//   const query = text;

//   const queryEmbedding = await embedder.embed([query]);
//   const corpusEmbeddings = await embedder.embed(corpus);

//   const cosSimilarity = util.cosineSimilarity(queryEmbedding, corpusEmbeddings);
//   const topResults = cosSimilarity
//     .map((score, idx) => [score, idx])
//     .sort((a, b) => b[0] - a[0])
//     .slice(0, top_k);

//   for (const [, idx] of topResults) {
//     idxs.push(parseInt(idx));
//   }

//   return df.iloc(idxs, ':').to_json({ orient: 'records', lines: true });
// }

// async function similarityCheck(k, text) {
//   const sentences1 = text;
//   const sentences2 = [qa.iloc(k, 0)];

//   const embeddings1 = await embedder.embed([sentences1]);
//   const embeddings2 = await embedder.embed(sentences2);

//   const cosSimilarity = util.cosineSimilarity(embeddings1, embeddings2);
//   const similarity = cosSimilarity[0];

//   return parseFloat(similarity);
// }

// const app = express();
// app.use(json());

// app.get('/', (req, res) => {
//   res.send('Review API');
// });

// app.get('/review/:text', (req, res) => {
//   const { text } = req.params;
//   res.send(review(text));
// });

// app.get('/search/:text', (req, res) => {
//   const { text } = req.params;
//   search(text)
//     .then((results) => res.send(results))
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     });
// });

// app.get('/similarity/:id/:text', (req, res) => {
//   const { id, text } = req.params;
//   similarityCheck(parseInt(id), text)
//     .then((similarity) => res.send(similarity.toString()))
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     });
// });

// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
