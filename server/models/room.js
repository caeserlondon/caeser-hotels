const mongoose = require('mongoose');

const roomSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter room name'],
			trim: true,
			maxLength: [50, 'Room name cannot exceed 50 characters'],
		},
		pricePerNight: {
			type: Number,
			required: [true, 'Please enter room price per night'],
			default: 0.0,
		},
		description: {
			type: String,
			required: [true, 'Please enter room description'],
		},
		guestCapacity: {
			type: Number,
			required: [true, 'Please enter room guest capacity'],
		},
		imageurls: [],
		currentbookings: [],
		address: {
			type: String,
			required: [true, 'Please enter hotel address'],
			// using enum to restrict the input
			enum: {
				values: ['Downtown Dubai', 'Dubai Marina'],
				message: 'Please select correct address for room',
			},
		},
	},
	{
		timestamps: true,
	}
);

// module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema); to be used with new RoomSchema

const roomModel = mongoose.model('rooms', roomSchema);

module.exports = roomModel;
