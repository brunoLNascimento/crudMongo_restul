const restful = require('node-restful')
const mongoose = restful.mongoose

const planetSchema = new mongoose.Schema({

	nome:  {type: String, field: 'nome', required: "Nome é um campo obrigatório!"},
	clima: {type: String, field: 'clima', required: "Clima é um campo obrigatório!"},
	terreno: {type: String, field: 'terreno', required: "Terreno é um campo obrigatório!"}

});

module.exports = restful.model( 'planet', planetSchema );
