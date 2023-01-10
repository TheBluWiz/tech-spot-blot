const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('login')
});

router.get('/sign-up', async (req,res) => {
  res.render('sign-up')
});

router.get('/logout', async (req,res) => {
  req.session.destroy();
  res.render('login');
})

module.exports = router;