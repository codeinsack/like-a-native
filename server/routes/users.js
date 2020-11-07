const express = require('express');

const {
  getAssignedWords,
  assignWord,
} = require('../controllers/users');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/assignedwords').get(protect, getAssignedWords);

router.route('/:id/assignword').put(protect, assignWord);

module.exports = router;
