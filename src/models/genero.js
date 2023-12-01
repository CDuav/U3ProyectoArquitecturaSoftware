const mongoose = require("mongoose");

const generoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Genero', generoSchema);