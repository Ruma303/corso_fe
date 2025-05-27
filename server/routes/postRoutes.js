const express = require('express');
const router = express.Router();

const { getPosts, findPosts } = require('../controllers/postController');

router.get('/posts', getPosts);
router.get('/posts/:title', findPosts);

module.exports = router;
