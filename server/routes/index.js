const express = require('express');
const router = express.Router();
const path = require('path');

module.exports = (app) => {
  router.get('/', async (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

  app.use('/', router);
};
