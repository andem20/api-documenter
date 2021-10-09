const api_model = require('../../models/api_model');

const getall = (req, res) => {
    api_model.find({}, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = getall;