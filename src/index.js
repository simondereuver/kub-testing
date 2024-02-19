const express = require('express');
const app = express();
const env = require("dotenv");

module.exports = {
    PORT: process.env.PORT
};

// Define a route handler for the root path '/'
app.get('/', (req, res) => {
    // Send an HTML response with styled text
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Demo Deployment</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    color: #333;
                }
            </style>
        </head>
        <body>
            <h1>Demo Deployment of Kubernetes and Docker</h1>
            <p>This is a simple Node.js application deployed on Azure.</p>
        </body>
        </html>
    `);
});

const port = process.env.PORT;

// Start the server
app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
});