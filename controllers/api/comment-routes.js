const router = require('express').Router();
const { Comment } = require('../../models/');

router.post('/', async (req, res) => {
    try {
        if(!req.session.userId) {
            throw new Error("User not authenticated")
        }
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;