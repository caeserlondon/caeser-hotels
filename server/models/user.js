const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		name: { type: String, requireed: true },
		email: { type: String, requireed: true },
		password: { type: String, requireed: true },
		isAdmin: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('users', userSchema);
