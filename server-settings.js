const express = require('express');
const nunjucks = require('nunjucks');

// Import routes =>
const routes = require('./routes');

class Server {
    constructor() {
        this.server = express();

        this.middlewares();
        this.templateEngine();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.set('view engine', 'njk');
        this.server.use(express.static('public'));
    }

    routes() {
        this.server.use(routes);
    }

    templateEngine() {
        nunjucks.configure('views', {
            express: this.server,
            autoescape: false,
            noCache: true
        })
    };
};

module.exports = new Server().server;