const { mongoose } = require('mongoose');
const APIDoc = require('../../models/APIDoc');

const createApiDoc = (req, res) => {
	console.log(req.params.id);
   const filter = {_id: req.params.id};

	APIDoc.updateOne(filter, 
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