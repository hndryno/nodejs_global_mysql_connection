// const mysql = require('mysql2')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('./server/mysql')

app.use(bodyParser.json())

// const mysqlConnection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     // database: 'db_employee'
    // })
    
    // mysqlConnection.connect((err) => {
        //     if(!err)
        //         console.log('DB connection success')
        //     else
        //         console.log('DB connection failed! error!')
        // })
        
app.listen(3000, () => console.log(`express server is running on port 3000`))
require('./routes/main.routes')(app)

// app.get('/employee', (req, res) => {
//     mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
//         if(!err){
//             res.send(rows)
//         }else{
//             console.log(err)
//         }
//     })
// })

// app.get('/employee/:id', (req, res) => {
//     mysqlConnection.query('SELECT * FROM employee WHERE id = ?', [req.params.id], (err, rows) => {
//         if(!err){
//             res.send(rows)
//         }else{
//             console.log(err)
//         }
//     })
// })

// app.post('/employee', (req, res) => {
//     console.log(req.body)
//     const employee = { name: 'Kuluk', empCode: 'emp189', salary: '2500' };
//     mysqlConnection.query('INSERT INTO employee SET ?', employee, (err, rows) => {
//         if(!err){
//             res.send(rows)
//         }else{
//             console.log(err)
//         }
//     })
// })

// app.delete('/employee/:id', (req, res) => {
//     mysqlConnection.query('DELETE FROM employee WHERE id = ?', [req.params.id], (err, rows) => {
//         if(!err){
//             res.send('Delete employee successfull!')
//         }else{
//             console.log(err)
//         }
//     })
// })