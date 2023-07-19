// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
// Create instance of express
const app = express();
// Use body parser middleware
app.use(bodyParser.json());
// Use cors middleware
app.use(cors());
// Create object to store comments
const commentsByPostId = {};
// Create route to get comments
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});
// Create route to post comments
app.post('/posts/:id/comments', (req, res) => {
  // Create id for comment
  const commentId = randomBytes(4).toString('hex');
  // Get comment from request body
  const { content } = req.body;
  // Get comments for post
  const comments = commentsByPostId[req.params.id] || [];
  // Add new comment to comments
  comments.push({ id: commentId, content });
  // Set comments for post
  commentsByPostId[req.params.id] = comments;
  // Send back comments
  res.status(201).send(comments);
});
// Listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});