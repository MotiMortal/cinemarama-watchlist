const express = require('express');
const router = express.Router();
const watchlistServices = require('../services/watchlistDataBaseService')

router.post('/', function(req, res) {
    const user = req.body.username
    watchlistServices.criarWatchlist (user)
    return res.send(user)
})

module.exports = router