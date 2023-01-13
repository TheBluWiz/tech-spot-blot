const router = require('express').Router();

const apiRoutes = require('./api')
const loginRoutes = require('./login');
const dashboardRoutes = require('./dashboard')
const { BlogPost, User } = require('../models')

router.get('/', async (req, res) => {

  const blogPostData = await BlogPost.findAll({
    attributes: { exclude: ['password'] },
    include: [{name: User}],
    
  })
  const blogPost = blogPostData.map((blot) => blot.get({ plain: true }));
  console.log(blogPost)
  res.render('home', { blogPost })
})

router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;