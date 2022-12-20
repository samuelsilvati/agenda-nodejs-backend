const Contato = require("../models/ContatoModel");

exports.index = async (req, res) => {
  // Middleware
  const contatos = await Contato.buscaContatos();
  res.render("contatos", { contatos });
};
