const { Router } = require("express");

const routes = new Router();

// Controllers =>
const MembersController = require("./app/controllers/MembersController");
const InstructorsController = require("./app/controllers/InstructorsController");

// Routes (Members) =>
routes.get("/", MembersController.RenderIndex);

// Routes (Instructors) =>
routes.get("/instructors", InstructorsController.RenderIndex);

// => New instructor
routes.get("/instructors/create", InstructorsController.RenderNewInstructor);
routes.post("/instructors", InstructorsController.Create);

module.exports = routes;
