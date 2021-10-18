const { mongoose } = require('mongoose');
const APIDoc = require('../../models/APIDoc');

const createApiDoc = (req, res) => {
	console.log(req.body);
	// const APIDoc = new api_model(req.body);

	// APIDoc.save((err, doc) => {
	// 	if (err) return console.error(err);
	// 	console.log(doc.title + " saved to collection.");
	// });
}

module.exports = createApiDoc;