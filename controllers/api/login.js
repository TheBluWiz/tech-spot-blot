const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  console.log(`Attempting POST:\n`)
  try {
    const requestedUser = await User.findOne({
      where: {
        username: req.body.user.trim()
      },
    })
    if (!requestedUser) {
      return res.status(400).json({ message: "No user found" })
    }
    const validUser = requestedUser.checkPassword(req.body.password)
    if (!validUser) {
      return res.status(400).json({ message: "Incorrect Password" })
    }
    req.session.save(() => {
      req.session.login = true;
      req.session.username = req.body.user.trim();
      // Potentially include user.id
      return res.status(200).json({ message: "Log In Successful"});
    })
  }
  catch (err) {
    console.log(err)
    return res.status(404).json(err)
  }
})

router.post('/sign-up', async (req, res) => {
  try {
    console.log(req.body);
    let userUnique = await User.findOne({
      where: {
        username: req.body.user.trim()
      },
    })
    if (userUnique === null) {
      console.log("Creating Unique User")
      const newUser = {
        username: req.body.user.trim(),
        password: req.body.password
      };
      try {
        const userData = await User.create(newUser);
        console.log(userData)
        req.session.save(() => {
          req.session.login = true;
          req.session.username = newUser.username;
          res.status(200).json({ message: "Login Successful" });
        })
      }
      catch (err) {
        console.log(`User creation failed:\n\n`)
        console.log(err)
      }
    } else {
      return res.status(500).json({ message: "This user already exists" })
    }
  }
  catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;