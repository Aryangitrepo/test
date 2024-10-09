const express = require('express');
const app = express();
const port = 3000;
//adad
// Define a route for the root URL
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express HTML Server</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
        <p>This is a simple HTML page served by an Express.js server.</p>
    </body>
    </html>
  `);
});
//hello
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
