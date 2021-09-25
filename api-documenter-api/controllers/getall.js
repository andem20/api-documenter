const Schemas = require('../models/api_model'); 

const getall = (req, res) => {
    Schemas.Api.find({}, function(err, result) {
        if (err) {
            console.log(err + "hej");
        } else {
            res.json(result);
        }
    });
}

module.exports = getall;