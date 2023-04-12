const User = require('/User');
const Post = require('/Post');
const Comment = require('/Comment');

Post.belongTo(User);

User.hasMany(Post, {
    foreignKey: 'UserId',
});

Post.hasMany(Comment, {
    foreignKey: 'PostId',
});

Comment.belongsTo(Post);

Comment.belongsTo(User, {
    foreignKey: 'UserId',
});

module.exports = { User, Post, Comment }
