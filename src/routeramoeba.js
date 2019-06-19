const express = require('express')
const router = express.Router()

module.exports = function(connection){
    router.post('/?', (req, res, next) => {
        connection.query(`INSERT INTO amoeba(cor) VALUES(${req.body.cor})`, function(err, data){
            if(err){
                res.status(401).send(JSON.stringify(err))
            } else {
                res.json(data)
            }
        })
    })
}

