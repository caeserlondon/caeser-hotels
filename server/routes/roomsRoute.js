const express = require('express');
const router = express.Router();

const Room = require('../models/room');

router.get('/getallrooms', async (req, res) => {
	try {
		const rooms = await Room.find({});
		return res.json({ rooms });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

module.exports = router;
