const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    const planetModel = require('../api/planet/planetService')
    planetModel.register(router, '/planet')
}