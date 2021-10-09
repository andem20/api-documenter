const express = require('express');
const { getall, get } = require('../controllers/apidocs_controller');
const router = express.Router();

router.get('/', getall);
router.get('/:id', get);

module.exports = router;