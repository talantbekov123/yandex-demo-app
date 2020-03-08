const fs = require('fs');
const express = require('express');

const router = express.Router();

module.exports = (app) => {
  router.get('/', async (req, res) => {
    const rawdata = await fs.readFileSync('./data/users.json');
    const users = JSON.parse(rawdata);
    res.json(users);
  });

  router.get('/:_id', async (req, res) => {
    const userId = req.params._id;
    const rawdata = await fs.readFileSync('./data/users.json');

    const users = JSON.parse(rawdata);

		const user = users.find(elem => elem._id === userId);

		if(!user) {
			res.status(404).json({"message": "Нет пользователя с таким id"});
		} else {
			res.json(user);
		}
  });

  app.use('/users', router);
};
