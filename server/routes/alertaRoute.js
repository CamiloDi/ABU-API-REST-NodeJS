const express = require('express');
const app = express();
const Alerta = require('../models/alertaModel');
const moment = require('moment');
const mssql = require('../config/mssql');
//==================
//Permisos
//==================
const header=["Access-Control-Allow-Origin", "*"];



app.get('/alertas/:id_paciente',function(req,res){
    res.header(header[0],header[1]);
    let body = req.body;
    let id = req.params.id_paciente;
    mssql.getSPAlertas(id,function(err,alertas){
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }else{
            res.json({
                ok: true,
                alertas
            });
        }

    });

});

app.post('/alerta', function(req, res) {
    res.header(header[0],header[1]);
    let body = req.body;
    let fecha = moment(body.fecha).format('YYYY-MM-DDTHH:mm:ss.SSS')+'Z';

    let alerta = new Alerta({
        paciente: body.paciente,
        idBeacon: body.idBeacon,
        lugar: body.lugar,
        tipoAlerta: body.tipoAlerta,
        descripcion: body.descripcion,
        fecha: new Date(fecha)
    });
    mssql.postSPAlerta(alerta,(err,resp)=>{
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }else{
            res.json({
                ok: true,
                resp
            });
        }

    });
});

app.put('/alerta', function(req, res) {
    res.header(header[0],header[1]);
    let body = req.body;
    let id = body.id;

    mssql.putSPAlerta(id,(err,resp)=>{
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }else{
            res.json({
                ok: true,
                resp
            });
        }

    });
});

module.exports=app;