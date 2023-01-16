const router = require("express").Router();

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

router.use("/api", apiRoutes);
router.use("/login", loginRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;