const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Worldjs!')
});

app.get('/test', (req, res) => {
    res.send('test')
  });

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});