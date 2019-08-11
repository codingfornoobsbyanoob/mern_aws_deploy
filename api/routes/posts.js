const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = require('../models/post')

router.post('/', (req, res) => {
const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    content: req.body.content
})
post.save()
.then((result) => {
    res.status(200).send(result)
})
.catch((err) => {
    res.status(404).send(err)
})

})

router.get('/', (req, res) => {
    Post.find()
    .exec()
    .then((result) => {
        res.status(200).send(result)
    })
    .catch((err) => {
        res.status(404).send(err)
    })
})

module.exports = router