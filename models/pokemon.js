const mongoose = require('mongoose')
a
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: {type: String, required: true }
}, {
    timestamps: true
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon





