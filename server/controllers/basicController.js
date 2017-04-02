const basicController = {};

basicController.get = (req, res) => {
	res.json({
		message: 'hello api'
	});
};

basicController.getTest = (req, res) => {
	res.json({
		message: 'hello test'
	});
};

export default basicController;