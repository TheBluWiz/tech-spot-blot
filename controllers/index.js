const router = require("express").Router();
const { withAuth } = require('../Utils/helpers')

const apiRoutes = require("./api");
const loginRoutes = require("./login");
const dashboardRoutes = require("./dashboard");
const { BlogPost, User } = require("../models");

router.get("/", async (req, res) => {
  const data = {
    username: req.session.username
  }
  const blogPostData = await BlogPost.findAll({
    include: {
      model: User,
      attributes: ["username"],
    },
  });
  const blogPost = blogPostData.map((blot) => blot.get({ plain: true }));
  data.blogPost = blogPost
  console.log(data);
  res.render("home", { data });
});

// router.get("/blot/:id", withAuth, async (req, res) => {
//   const blogPostData = await BlogPost.findOne({
//     where: {
//       id: req.params.id
//     }
//   })
//   const blogPost = blogPostData.map((blot) => blot.get({ plain: true }));
//   res.render("blot", { blogPost })
// })

router.use("/api", apiRoutes);
router.use("/login", loginRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;