const router = require('express').Router();
// const sequelize = require('./config/connection');
const { Post, Comment, User } = require('../models/');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
            order: [["date_created", 'DESC']]
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts', { posts });
        console.log(posts)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
            order: [
                [
                    { model: Comment },
                    "date_created",
                    'DESC'
                ]
            ]
        });

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('single-post', { post, loggedIn: req.session.loggedIn })
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

nodule.exports = router;
