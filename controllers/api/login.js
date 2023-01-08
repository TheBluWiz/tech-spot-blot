const router = require('express').Router();

router.post('/', async (req, res) => {
  console.log(`Attempting POST:\n`)
  console.log(req.body)
  loginAttempt = await eval(req.body);
  console.log(loginAttempt)
  res.status(200).json(loginAttempt)
})

module.exports = router;