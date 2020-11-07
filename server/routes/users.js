const express = require('express');

const {
  getAttachedWords,
  attachWord,
  detachWord,
} = require('../controllers/users');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/attachedwords').get(protect, getAttachedWords);

router.route('/:id/attachword').put(protect, attachWord);

router.route('/:id/detachword').put(protect, detachWord);

module.exports = router;
