const express = require('express');
const app = express();
const Beacon = require('../models/beaconModel');
const moment = require('moment');
const tz = require('moment-timezone');

app.get('/beacon', function(req, res) {

    Beacon.find()
        .exec((err, beacons) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                beacons,
            });


        });
});

app.post('/beacon', function(req, res) {

    let body = req.body;
    let fecha = moment(body.fecha).format('YYYY-MM-DDTHH:mm:ss.SSS')+'Z';

    let beacon = new Beacon({
        nombre: body.nombre,
        id: body.id,
        fecha: new Date(fecha),
        usuario: body.usuario
    });
    beacon.save((err, beaconBD) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            message: `beacon ${beaconBD.nombre} guardado!`
        });
    });




});

app.post('/beacons', function(req, res) {
    let body = req.body;
    let beaconsJson = body.beacons;
    let cantidad = parseInt(body.cantidad);
    let beaconsGuardados = [];


    for (let i = 0; i < cantidad; i++) {
        let fecha = moment(beaconsJson[i].fecha).format('YYYY-MM-DDTHH:mm:ss.SSS')+'Z';
        let beacon = new Beacon({
            nombre: beaconsJson[i].nombre,
            id: beaconsJson[i].id,
            fecha: new Date(fecha),
            usuario:beaconsJson[i].usuario
        });
        beacon.save((err, beaconBD) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    err
                });
            } else {
                beaconsGuardados.push(beaconBD);
            }
            if (beaconsGuardados.length == cantidad) {

                res.json({
                    ok: true,
                    message: `Se han Guardado ${beaconsGuardados.length} beacons.`,
                    beaconsGuardados: beaconsGuardados.length
                });
            }
        });

    }

});

module.exports = app;