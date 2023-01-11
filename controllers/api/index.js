const router = require('express').Router();
const apiLogin = require('./login.js')
const dashboardControl = require('./dashboard')

router.use('/login', apiLogin)

module.exports = router;