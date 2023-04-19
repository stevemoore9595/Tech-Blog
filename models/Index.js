const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User);

User.hasMany(Post, {
    foreignKey: 'UserId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'PostId',
});

Comment.belongsTo(Post, {
    foreignKey: 'PostId',
});

Comment.belongsTo(User, {
    foreignKey: 'UserId',
});

module.exports = { User, Post, Comment };
