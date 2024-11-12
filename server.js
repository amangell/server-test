const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());

// Root route that displays "Hello, Galvanize!"
app.get('/', (req, res) => {
  res.send('Hello, Galvanize!');
});

app.get('/login', (req, res) => {
  const name = req.query.name || 'Guest';
  res.cookie('name', name);
  res.send(`Cookie set with name: ${name}`);
});

app.get('/hello', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.send(`Welcome ${name}!`);
  } else {
    res.send('Hello! Please log in first.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
