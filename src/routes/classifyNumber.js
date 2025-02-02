const express = require('express');
const { classifyNumber } = require('./../controller/classifyNumberController');

const router = express.Router();

router.route('/').get(classifyNumber);

module.exports = router;
