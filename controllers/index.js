const router = require('express').Router();
const login = require('./login');

router.get('/', async (req, res) => {
  res.render('home')
})

router.use('/login', login);

module.exports = router;