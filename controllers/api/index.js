const router = require('express').Router();
const apiLogin = require('./login.js')
const dashboardControl = require('./dashboard')

router.use('/login', apiLogin)

router.use('/dashboard', dashboardControl)

module.exports = router;