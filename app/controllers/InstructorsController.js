class InstructorsController {
    async Index(request, response) {
        return response.render('instructors/index');
    }
}

module.exports = new InstructorsController();