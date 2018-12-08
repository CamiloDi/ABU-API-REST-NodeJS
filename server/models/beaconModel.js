const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let beaconSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    id: {
        type: String,
        required: [true, 'El ID es necesario']
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha es necesaria']
    },
    usuario: {
        type: String,
        required: [true, 'El Usuario es necesario']
    }
});
module.exports = mongoose.model('Beacon', beaconSchema);