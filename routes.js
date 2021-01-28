const { Router } = require('express');

const routes = new Router();

routes.get('/', (request, response) => {
    return response.render('index');
});

module.exports = routes;