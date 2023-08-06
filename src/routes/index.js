import express from "express";

const router = express.Router();

import postsRouter from "./posts.js";

const routerConfig = () => {
  router.use('/posts', postsRouter);

  return router;
};

export default routerConfig;
