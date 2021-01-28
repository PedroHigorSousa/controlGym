const { Router } = require('express');

const routes = new Router();

// Controllers =>
const IndexController = require('./controllers/IndexController');

routes.get('/', IndexController.Index);

module.exports = routes;