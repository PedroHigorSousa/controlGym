class InstructorsController {
  async RenderIndex(request, response) {
    return response.render('instructors/index');
  }
  async RenderNewInstructor(request, response) {
    return response.render('instructors/create');
  }
  async Create(request, response) {

    const nameCoach = request.body.name;

    console.log(nameCoach);

    return response.json(
      {
        "message": "Success!"
      }
    );
  }
}

module.exports = new InstructorsController();
