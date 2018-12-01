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
process.env.URLDB ="mongodb://beacon:beacon1234@ds121624.mlab.com:21624/beacon_test"; //urlDB;