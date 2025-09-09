const express = require('express');
const { getTopCards } = require('./ranking');

function createServer() {
  const app = express();
  app.get('/rankings', (req, res) => {
    res.json(getTopCards());
  });
  return app;
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createServer().listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = { createServer };
