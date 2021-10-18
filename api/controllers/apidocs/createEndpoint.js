const { mongoose } = require('mongoose');
const api_model = require('../../models/api_model');

const createApiDoc = (req, res) => {
	console.log(req.params.id);
   const filter = {_id: req.params.id};

	api_model.updateOne(filter, 
   { 
      $push: {
         endpoints: req.body
      }
   }, (err, result) => {
      // TODO make proper response
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });

}

module.exports = createApiDoc;