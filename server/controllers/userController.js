import db from './../models';

const userController = {};

userController.post = (req, res) => {
	console.log('came here');
	const { username, password } = req.body;

	//Validation

	const user = new db.User({
		username,
		password
	});

	console.log('user here - ', user);

	user.save().then((newUser) => {
		console.log('newUser - ', newUser);
		res.status(200).json({
			success: true,
			data: newUser
		});
	}).catch((err) => {
		res.status(500).json({
			message: err
		});
	});
}


export default userController;