const express = require('express');
const { getall } = require('../controllers/apidocs_controller');
const router = express.Router();

router.get('/', getall);

module.exports = router;