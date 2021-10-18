const api_model = require('../../models/api_model');

// TODO create response helper
const getall = (req, res) => {
	api_model.find({}, '_id, title', (err, result) => {
		if(err) {
			console.log(err);
		} else {
			res.json(result.map(doc => ({...doc._doc, 
						links: {
							read: {
								href: `/apidocs/${doc._id}`,
								type: 'GET'
							},
							createEndpoint: {
								href: `/apidocs/${doc._id}/endpoint`,
								type: 'POST'
							}
						}
					})
				)
			);
		}
	});
}

module.exports = getall;