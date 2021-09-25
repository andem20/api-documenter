const express = require('express');
const router = express.Router();

// Route modules
const apiDocsRoute = require('./apidocs');

router.get('/', (req, res) => {
    res.send('See api docs here: ') //TODO API Documentation
})

router.use('/apidocs', apiDocsRoute);

module.exports = router;