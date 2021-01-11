const mysql = require('mysql2')

let dbConfig = {
    host: 'localhost',
    user: 'root',
    password : '',
    database : 'db_ts_crud',
    multipleStatements: true
  };

const pool = mysql.createPool(dbConfig)

pool.getConnection((err) => {
  if(!err){
    console.log(`Db connection Success`)
  }else{
    console.log(`Db connection failed, Err! ${err}`)
  }
})

module.exports = pool