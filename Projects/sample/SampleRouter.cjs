// router.cjs
const express = require('express');
const path = require('path');
const router = express.Router();



router.use(express.static(path.join(__dirname,'dist')));
// Catch-all route to serve the index.html file for all routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = router;
