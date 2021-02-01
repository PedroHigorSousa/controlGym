class IndexController {
  async RenderIndex(request, response) {
    return response.render("layout");
  }
}

module.exports = new IndexController();
