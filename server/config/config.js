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
process.env.PASSSQL = process.env.PASSSQL || '';
process.env.USERSQL = process.env.USERSQL || '';
process.env.IPSQL = process.env.IPSQL || '';
process.env.DBSQL = process.env.DBSQL || '';