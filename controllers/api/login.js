const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  console.log(`Attempting POST:\n`)
  try{
    requestedUser = await User.findOne({
      where: {
        username: req.body.user
      }
    })
    try {
      await bcrypt.compare(req.body.password, requestedUser.hashedPassword, (err, isValid) => {
        if (isValid) {
          console.log("They match!!")
          req.session.login = true;
          req.session.username = req.body.user;
          res.status(200).json({ message: "Login Successful" });
        }
        else res.status(400).json({ message: "Incorrect Password"})
      })
    }
    catch (err) {
      res.status(500).json(err)
    }
  }
  catch {
    res.status(404).json({ message: "User not found"})
  }
})

router.post('/sign-up', async (req, res) => {
  try {
    console.log(req.body);
    let userUnique = await User.findOne({
      where: {
        username: req.body.user
      },
    })
    console.log(userUnique)
    if (userUnique === null) {
      console.log("Creating Unique User")
      const newUser = {
        username: req.body.user.trim()
      };
      newUser.hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log(newUser)
      try {
        const userData = await User.create(newUser);
        console.log(userData)
        req.session.login = true;
        req.session.username = newUser.username;
        res.status(200).json({ message: "Login Successful" })
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