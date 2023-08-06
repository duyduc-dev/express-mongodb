import express from "express";

import PostsController from "../controllers/posts.controller.js";

const router = express.Router();

const postsController = new PostsController();

// router.get('/hello', postsController.hello)
router.get('/:id', postsController.getPostId)
router.get("/", postsController.getPosts);
router.post("/", postsController.insertNewPost);

export default router;
