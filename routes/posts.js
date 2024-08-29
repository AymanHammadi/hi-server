const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Posts is working' });
});

module.exports = router;