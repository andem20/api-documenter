const api_docs = require('../../models/api_model'); 

const get = (req, res) => {
    api_docs.findById(req.params.id, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = get;