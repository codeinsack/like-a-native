const express = require('express');
const { uploadWordImage } = require('../controllers/wordImage');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/:id')
  .post(protect, uploadWordImage);

module.exports = router;
