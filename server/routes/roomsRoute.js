const express = require('express')
const router = express.Router()

const Room = require('../models/room')

// --GET ALL ROOMS --
router.get('/getallrooms', async (req, res) => {
	try {
		const rooms = await Room.find({})
		// return res.json({ rooms });
		// make it simple and recive an array insted of an object (after testing with Postman)
		res.send(rooms)
	} catch (error) {
		return res.status(400).json({ message: error.message })
	}
})

// --GET ROOM BY ID --
router.post('/getroombyid', async (req, res) => {
	// console.log(req.body);
	try {
		const room = await Room.findOne({ _id: req.body.roomid })
		res.send(room)
	} catch (error) {
		return res.status(400).json({ message: error.message })
	}
})

module.exports = router
