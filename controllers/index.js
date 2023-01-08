const router = require('express').Router();
const apiRoutes = require('./api')
const loginRoutes = require('./login');

router.get('/', async (req, res) => {
  res.render('home')
})

router.use('/api', apiRoutes)
router.use('/login', loginRoutes);

module.exports = router;