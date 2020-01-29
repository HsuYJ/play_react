const path = require('path');
const express = require('express');
const app = express();
const port = 3001;

app.use('/build', express.static('build'));
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/build', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));