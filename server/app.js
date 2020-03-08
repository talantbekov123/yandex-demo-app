const express = require('express');

const app = express();
const logger = require('morgan')
const glob = require('glob');

// include logger
app.use(logger('dev'));
app.use(express.static('public'));

/* Configure routes */
const routes = glob.sync('./routes/*.js');
routes.forEach((route) => {
	require(route)(app);
});

// catch 404 and forwarding to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
  next(err);
});

// error handler
app.use(async (err, req, res) => {
	res.status(err.status || 500);
	res.send({ message: "Запрашиваемый ресурс не найден" })
});

app.listen(3000, () => {
  console.log('Запущен на порту 3000!');
});
