const router = require('express').Router();
const withAuth = require('../Utils/helpers')

router.get('/', withAuth, async (req, res) => {
  const user = {
    username: req.session.username
  }
  res.render('dashboard', { user })
});

module.exports = router;