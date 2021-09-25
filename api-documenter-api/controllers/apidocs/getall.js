const Schemas = require('../../models/api_model'); 

const getall = (req, res) => {
    Schemas.Api.find({}, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = getall;