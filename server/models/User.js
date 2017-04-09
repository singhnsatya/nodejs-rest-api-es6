import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minlength: [5, 'Username must be 5 charecters or more']
	},
	password: {
		type: String,
		required: true,
		minlength: [5, 'Password must be 5 charecters or more']
	},
	isDeleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now }
});

//Write some encryption here for password

const User = mongoose.model('User', userSchema);

export default User;