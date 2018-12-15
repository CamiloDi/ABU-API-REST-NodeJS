const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let alertaSchema = new Schema({
    paciente: {
        type: Number,
        required: [true, 'El id del paciente es necesario']
    },
    idBeacon: {
        type: String,
        required: [true, 'El ID es necesario']
    },
    lugar: {
        type: String,
        required: [true, 'El lugar es necesario']
    },
    tipoAlerta: {
        type: String,
        required: [true, 'El tipo de alerta es necesario']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es necesaria']
    },
    fecha: {
        type: Date ,
        required: [true, 'La fecha es necesaria']
    }
});
module.exports = mongoose.model('Alerta', alertaSchema);