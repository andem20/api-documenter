const APIDoc = require('../../models/APIDoc'); 
const mongoose = require('mongoose');

const get = (req, res) => {
	const id = req.params.id;

	if(mongoose.Types.ObjectId.isValid(id)) {
		APIDoc.findById(id, (err, result) => {
			if(err) {
				console.log(err);
			} else {
				if(result) {
					result._doc.links = {
						createEndpoint: {
							href: `/apidocs/${id}/endpoint`,
							type: 'POST'
						}
					};
	
					res.json(result);
				} else {
					res.status(404).json({
						message: 'Id does not exist'
					});
				}
			}
		});
	} else {
		res.status(406).json({
			message: 'Invalid id'
		});
	}
}

module.exports = get;