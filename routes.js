const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require("./src/controllers/loginController");
const contatosController = require("./src/controllers/contatosController")
const contatoController = require("./src/controllers/contatoController");
const registerController = require("./src/controllers/registerController")


const { loginRequired } = require("./src/middlewares/middleware");

// Rotas de Home
route.get("/", homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

route.get("/register/index", registerController.index);
route.post("/register/register", registerController.register);


// Rotas de contato
route.get("/contatos/index", loginRequired, contatosController.index);
route.get("/contato/index", loginRequired, contatoController.index);
route.post("/contato/register", loginRequired, contatoController.register);
route.get("/contato/index/:id", loginRequired, contatoController.editIndex);
route.post("/contato/edit/:id", loginRequired, contatoController.edit);
route.get("/contato/delete/:id", loginRequired, contatoController.delete);



module.exports = route;