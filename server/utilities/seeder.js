const room = require('../models/room');
const mongoose = require('mongoose');
const rooms = require('../data/rooms');

mongoose.connect(
	`mongodb+srv://caeserlondon:caeserlondon@cluster0.hu2ee.mongodb.net/caeser-hotels`
	// `mongodb+srv://caeserlondon:caeserlondon@cluster0.hu2ee.mongodb.net/?retryWrites=true&w=majority`
);

const seedRooms = async () => {
	try {
		await room.deleteMany();
		console.log('Rooms are deleted');

		await room.insertMany(rooms);
		console.log('All Rooms are added.');

		process.exit();
	} catch (error) {
		console.log(error.message);
		process.exit();
	}
};

seedRooms();
