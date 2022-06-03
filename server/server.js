const express = require('express');

const app = express();

const dbConfig = require('./dbConfig.js');

const port = process.env.PORT || 5001;

app.listen(port, () =>
	console.log(`Server running on port ${port} Using Nodemon)`)
);
