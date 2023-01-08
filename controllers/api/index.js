const router = require('express').Router();
const apiLogin = require('./login.js')

router.use('/login', apiLogin)

module.exports = router;