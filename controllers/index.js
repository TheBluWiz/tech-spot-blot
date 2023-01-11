const router = require('express').Router();
const apiRoutes = require('./api')
const loginRoutes = require('./login');
const dashboardRoutes = require('./dashboard')

router.get('/', async (req, res) => {
  const user = {
    username: req.session.username
  }
  res.render('home', { user })
})

router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;