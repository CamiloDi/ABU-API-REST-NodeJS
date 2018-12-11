const mongoose = require('mongoose');
const timeZone = require('mongoose-timezone');
const moment = require('moment');
const tz = require('moment-timezone');
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
        type: Date ,
        required: [true, 'La fecha es necesaria'],
        default:moment.tz(process.env.TZ).format("YYYY-MM-DDTHH:MM:ss")
        
    },
    usuario: {
        type: String,
        required: [true, 'El Usuario es necesario']
    }
});
module.exports = mongoose.model('Beacon', beaconSchema);