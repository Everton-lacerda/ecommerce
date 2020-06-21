const express = require('express')
const router = express.Router()

// home page

router.get('/users', (req, res, next) => {
    console.log('users')
})

module.exports = router