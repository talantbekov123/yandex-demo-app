const fs = require('fs');
const express = require('express');

const router = express.Router();

module.exports = (app) => {
  router.get('/', async (req, res) => {
    const rawdata = await fs.readFileSync('./data/cards.json');
    const cards = JSON.parse(rawdata);
    res.json(cards);
  });

  app.use('/cards', router);
};
