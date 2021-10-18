const api_docs = require('../../models/api_model'); 

const get = (req, res) => {
    api_docs.findById(req.params.id, (err, result) => {
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