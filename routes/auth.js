const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Auth is working' });
});

module.exports = router;