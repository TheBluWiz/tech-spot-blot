const router = require('express').Router();
const withAuth = require('../Utils/helpers')

router.get('/', withAuth, async (req, res) => {
  const data = {
    username: req.session.username
  }
  console.log(data)
  res.render('dashboard', { data })
});

module.exports = router;