const { Router } = require('express');

const routes = new Router();

// Controllers =>
const MembersController = require('./app/controllers/MembersController');
const InstructorsController = require('./app/controllers/InstructorsController');

// Routes (Members) =>
routes.get('/', MembersController.Index);

// Routes (Instructors) =>
routes.get('/instructors', InstructorsController.Index);


module.exports = routes;