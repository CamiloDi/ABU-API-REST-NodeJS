//==================
//Puerto
//==================

process.env.PORT = process.env.PORT || 3000;

//==================
//Entorno
//==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================
//Base de Datos
//==================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/beacon_test';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//==================
//Zona
//==================
process.env.TZ = process.env.TZ || 'America/Santiago';

//==================
//Datos SQL Server
//==================
process.env.PASSSQL = process.env.PASSSQL || 'Proyecto.ABU.2018-Mindsoft';
process.env.USERSQL = process.env.USERSQL || 'abu';
process.env.IPSQL = process.env.IPSQL || '200.6.117.164';
process.env.DBSQL = process.env.DBSQL || 'ABU';