const mongoose = require('mongoose')

var db = mongoose.connection;

db.on('connecting', function(){
    console.log("Mongo conectando")
})
db.on('connected', function() {
    console.log('MongoDB: conectado!');
});



module.exports = mongoose.connect("mongodb://localhost/restFul")