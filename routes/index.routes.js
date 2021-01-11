const express = require('express')
const router = express.Router()
const pool = require('../server/mysql')

router.get('/', (req, res) => {
    pool.query("SELECT * FROM `user`", (err, result, field) => {
        if(!err){
            console.log(field)
            res.send(result)
        }else{
            console.log(err)
        }
    })
})

module.exports = router