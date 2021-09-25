const express = require('express');
const getall = require('../controllers/getall');
const router = express.Router();

router.get('/', getall);

module.exports = router;