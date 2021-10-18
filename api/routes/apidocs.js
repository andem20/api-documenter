const express = require('express');
const controller = require('../controllers/apidocs_controller');
const router = express.Router();

router.get('/', controller.getall);
router.get('/:id', controller.get);
router.post('/', controller.createApiDoc);
router.post('/:id/endpoint', controller.createEndpoint);

module.exports = router;