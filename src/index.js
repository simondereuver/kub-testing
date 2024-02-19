const app = require('express')();
const env = require("dotenv");

module.exports = {
	PORT: process.env.PORT
};
app.get('/', (req, res ) => 
    res.json({ message: 'Demo deployment of kb and docker in a nodejs app on Azure' }) 
);

const port = process.env.PORT;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
