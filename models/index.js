const User = require('./User');
const BlogPost = require('./BlogPost');

// Took this part out with reccomendation from a TA
// User.hasMany(BlogPost, {
//   foreignKey: 'id',
// });

BlogPost.belongsTo(User, {
  foreignKey: 'userID',
  onDelete: 'Cascade'
})

module.exports = { User, BlogPost};

