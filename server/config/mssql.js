
const sql = require("mssql");
require('../config/config');

const sqlConfig = {
	server : process.env.IPSQL,
	database : process.env.DBSQL,
	user : process.env.USERSQL,
	password :process.env.PASSSQL
}

exports.getSP = function(sp,param,value,callback){
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input(param, value);
        request.execute(sp, function(err, recordsets) {
            if(err) {
                callback(err);
                sql.close();
                }
            else{
                let beacons=recordsets.recordsets;
                sql.close();
                //res.end(JSON.stringify(recordsets));
                callback(null,beacons);

            } // Result in JSON format
        });
    });
   }