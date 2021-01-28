class IndexController{
    async Index(request, response){
        return response.render('index');
    }
}

module.exports = new IndexController();