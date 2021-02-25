const express = require('express');
const { postPDF } = require('../../controller/orders');

const router = express.Router();

router.route('/').post(postPDF);

module.exports = router;
