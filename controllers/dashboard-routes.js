const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
   const postData = await Post.findAll({
    where: {
        UserId: req.session.userId,
    },
    order: [['createdAt', 'DESC']]
   });

const posts = postData.map(post => post.get({ plain: true }));

res.render('dashboard', {
    posts,
});

});

router.get('/newpost', withAuth, (req, res) => {
    res.render('newpost')
});

router.get('/edit', withAuth, (req, res) => {
    res.render('edit')
});

module.exports = router