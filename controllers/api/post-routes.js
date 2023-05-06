const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post("/", (req,res) => {
    if(!req.session.userId){
        res.status(401).json({message:"please log in"})
    }else{
        Post.create({
          title: req.body.title,
          description: req.body.description,
          UserId: req.session.userId,
        })
          .then(newPost => {
            res.json(newPost);
          })
          .catch(err => {
            console.log(err);
        res.status(500).json(err);
    })
}
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const affectedRows = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!affectedRows) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = await 
        Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;