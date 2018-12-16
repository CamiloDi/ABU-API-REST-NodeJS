
const sql = require("mssql");
require('../config/config');

const sqlConfig = {
	server : process.env.IPSQL,
	database : process.env.DBSQL,
	user : process.env.USERSQL,
	password :process.env.PASSSQL
}
//Beacons
getSPBeacon = (id,callback)=>{
    let sp = "api_Registro_Get";
    let param = "id_Beacon";
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input(param, id);
        request.execute(sp,(err, respuestaBD) =>{
            if(err) {
                callback(err);
                sql.close();
                }
            else{
                let beacons=respuestaBD.recordsets;
                sql.close();
                callback(null,beacons);

            }
        });
    });
   }

   postSPBeacon = (beacon,callback)=>{
    let sp = "api_Actividad_Insert";
    let param = ["id_Beacon","id_Paciente","NombreBeacon","Fecha"];
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input(param[0], beacon.id);
        request.input(param[1], beacon.usuario);
        request.input(param[2], beacon.nombre);
        request.input(param[3], beacon.fecha);

        request.execute(sp,(err, respuestaBD)=> {
            if(err) {
                callback(err);
                sql.close();
                }
            else{
                let respuesta='No se guardo beacon';
                sql.close();
                if(respuestaBD.rowsAffected[0]==1)
                {
                    respuesta =`Beacon ${beacon.nombre} Guardado!`
                }
                callback(null,respuesta);

            }
        });
    });
   }
   postSPBeacons = (beacons,cantidad,callback)=>{
    let sp = "api_Actividad_Insert";
    let param = ["id_Beacon","id_Paciente","NombreBeacon","Fecha"];
    let beaconsGuardados = [];
    sql.connect(sqlConfig, function() {
        for(let i =0;i<cantidad;i++){
        var request = new sql.Request();
        request.input(param[0], beacons[i].id);
        request.input(param[1], beacons[i].usuario);
        request.input(param[2], beacons[i].nombre);
        request.input(param[3], beacons[i].fecha);

        request.execute(sp,(err, respuestaBD)=> {
            if(err) {
                callback(err);
                sql.close();
                }
            else{
                beaconsGuardados.push(respuestaBD.rowsAffected[0]);

            }
            if(beaconsGuardados.length==cantidad){
                sql.close();
                let respuesta ={message:`Se han Guardado ${beaconsGuardados.length} beacons.`,
                                beaconsGuardados: beaconsGuardados.length};
                callback(null,respuesta);
            }
        });
    }
    });
   }
//Alertas

getSPAlertas = (id,callback)=>{
    let sp = "api_Alerta_Get";
    let param = "id_Paciente";
    sql.close();
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input(param, id);
        request.execute(sp,(err, respuestaBD) =>{
            if(err) {
                callback(err);
                sql.close();
                }
            else{
                let alertas=respuestaBD.recordsets;
                sql.close();
                callback(null,alertas);

            }
        });
    });
   }

postSPAlerta = (alerta,callback)=>{
    let sp = "api_Alerta_Insert";
    let param = ["id_Paciente","id_Beacon","Lugar","TipoAlerta","Descripcion","Fecha"];
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input(param[0], alerta.paciente);
        request.input(param[1], alerta.idBeacon);
        request.input(param[2], alerta.lugar);
        request.input(param[3], alerta.tipoAlerta);
        request.input(param[4], alerta.descripcion);
        request.input(param[5], alerta.fecha);

        request.execute(sp,(err, respuestaBD)=> {
            if(err) {
                callback(err);
                sql.close();
                }
            else{
                let respuesta='No se guardo alerta';
                sql.close();
                if(respuestaBD.rowsAffected[0]==1)
                {
                    respuesta =`Alerta ${alerta.tipoAlerta} del paciente ${alerta.paciente} Guardado!`
                }
                //res.end(JSON.stringify(recordsets));
                callback(null,respuesta);

            } // Result in JSON format
        });
    });
   }


   putSPAlerta = (id,callback)=>{
    let sp = "api_Alerta_Update";
    let param = "id_Alerta";
    sql.close();
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input(param, id);
        request.execute(sp,(err, respuestaBD)=> {
            if(err) {
                callback(err);
                sql.close();
                }
            else{
                let respuesta='No se actualizo alerta';
                sql.close();
                if(respuestaBD.rowsAffected[0]==1)
                {
                    respuesta =`Alerta ${id} se ha actualizado`
                }
                //res.end(JSON.stringify(recordsets));
                callback(null,respuesta);

            } // Result in JSON format
        });
    });
   }



   module.exports = {getSPBeacon,postSPBeacon,postSPBeacons,
                     getSPAlertas,postSPAlerta,putSPAlerta};