const router = require('express').Router();
const { BlogPost, User } = require('../models')
const withAuth = require('../Utils/helpers')

router.get('/', withAuth, async (req, res) => {
  const data = {
    userID: req.session.userID,
    username: req.session.username
  }
  const blogPostData = await BlogPost.findAll({
    where: {
      userID: data.userID,
      // username: req.session.username
    },
    include: {
      model: User,
      attributes: ["username"],
    },
  });
  const blogPost = blogPostData.map((blot) => blot.get({ plain: true }));
  data.blogPost = blogPost
  res.render('dashboard', { data })
});

module.exports = router;