const APIDoc = require('../../models/APIDoc'); 

const get = (req, res) => {
    APIDoc.findById(req.params.id, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            result._doc.links = {
                createEndpoint: {
                    href: `/apidocs/${req.params.id}/endpoint`,
                    type: 'POST'
                }
            };
            res.json(result);
            
        }
    });
}

module.exports = get;