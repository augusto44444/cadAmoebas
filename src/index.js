const express = require('express')
const server = express()
const mysql = require('mysql')
const port = process.env.PORT || '3000'
const router = require('./routeramoeba')

const connection = mysql.createConnection(process.env.JAWSDB_URL)

connection.connect(function (err) {
    if (err) throw err;
    server.get('/', function (req, res) {
        connection.query('SELECT * FROM amoeba', function (err, data) {
            if (err) throw err;
            res.json(data);
        })
    })

    server.use('/api', router(connection))
})






server.listen(port, (req, res) => {
    console.log("servidor rodando na porta " + port)
})