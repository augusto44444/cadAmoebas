const express = require('express')
const server = express()
const mysql = require('mysql')
const port = process.env.PORT || '3000'

if(process.env.JAWSDB_URL){
    const connection = mysql.createConnection(process.env.JAWSDB_URL)
    connection.connect(function(err){
        if(err) throw err;
        server.get('/', function(req, res) {
            connection.query('SELECT * FROM amoeba', function(err, data) {
                if(err) throw err;
                res.json(data);
            })
        })
    })

}else {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'augusto'
    })
    connection.connect(function(err){
        if(err) throw err;
        server.get('/', function(req, res) {
            connection.query('SELECT * FROM carro', function(err, data) {
                if(err) throw err;
                res.json(data);
            })
        })
    })
}



server.listen(port, (req, res) => {
    console.log("servidor rodando na porta " + port)
})