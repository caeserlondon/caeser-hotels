const express = require('express');

const app = express();

const dbConfig = require('./dbConfig.js');

const roomsRoute = require('./routes/roomsRoute');

app.use(express.json());

app.use('/api/rooms', roomsRoute);

const port = process.env.PORT || 5001;

app.listen(port, () =>
	console.log(`Server running on port ${port} Using Nodemon)`)
);
