const express = require('express'),
    v1ApiRouter = require('./v1');

let router = express.Router();

// Setup API version 1 router 
router.use('/v1', v1ApiRouter);

module.exports = router;