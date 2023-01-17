const router = require('express').Router();
const { BlogPost } = require('../../models')

router.post('/', async (req, res) => {
  try {
    console.log(`Received post attempt:\n\n`)
    const blogPost = {
      title: req.body.title.trim(),
      content: req.body.content.trim(),
      userID: req.session.userID
    }
    console.log(blogPost)
    const postedBlot = await BlogPost.create(blogPost);
    console.log(postedBlot);
    res.status(200).json({ message: "Post Successful!"})
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router;