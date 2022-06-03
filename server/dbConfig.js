const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

var mongoURL = process.env.DB_MONGO_COMP_URL;

mongoose.connect(mongoURL, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

var connection = mongoose.connection;

connection.on('error', () => {
	console.log('Mongo DB Connection Failed');
});

connection.on('connected', () => {
	console.log('Mongo DB Connection Successful');
});

module.exports = mongoose;
