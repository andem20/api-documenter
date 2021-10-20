const APIDoc = require('../../models/APIDoc');

// TODO create response helper
const getall = (req, res) => {
	APIDoc.find({}, '_id, title', (err, result) => {
		if(err) {
			res.json(err);
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