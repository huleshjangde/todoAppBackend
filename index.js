const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskrouter = require("./routers/router")
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/images', express.static('backend/public/images'));


// Connect to MongoDB Atlas
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// GET all tasks
app.use('/',taskrouter.taskrouter)
// Start the server
const port = 3020;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
