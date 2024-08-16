// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can choose any available port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' folder

app.post('/submit-form', (req, res) => {
  // Log the form data to the console (you can replace this with saving to a database)
  console.log('Form Data:', req.body);

  // You can send a response back to the client if needed
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
150.107.177.231