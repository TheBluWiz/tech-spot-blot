const User = require('./User');
const BlogPost = require('./BlogPost');

User.hasMany(BlogPost, {
  foreignKey: 'id'
});

BlogPost.belongsTo(User, {
  foreignKey: 'userID'
})

module.exports = { User, BlogPost};

