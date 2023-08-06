import {
  getAllPost,
  getPostById,
  insertPost,
} from "../services/posts.service.js";

class PostsController {
  // GET /post/hello
  hello(req, res) {
    res.json({
      message: "hello",
    });
  }

  // GET /post
  async getPosts(req, res) {
    try {
      const data = await getAllPost();
      if (data) {
        return res.json({
          status: 200,
          data,
        });
      }
      res.json({
        message: "Posts not found!",
      });
    } catch (error) {
      console.log(
        `file: posts.controller.js:9 ~ PostsController ~ index ~ error:`,
        error
      );
      res.json({
        message: "Something wrong!!!",
      });
    }
  }

  // GET /post/:id
  async getPostId(req, res) {
    const postId = req.params.id;
    console.log(`file: posts.controller.js:42 ~ PostsController ~ getPostId ~ postId:`, postId)

    try {
      if (postId) {
        const data = await getPostById(postId);
        if (data) {
          return res.json({
            data: data,
          });
        }

        res.json({
          message: 'Post not found!'
        })
      }
    } catch (error) {
      console.log(
        `file: posts.controller.js:35 ~ PostsController ~ getPostId ~ error:`,
        error
      );
      res.json({
        message: 'id missing'
      })
    }
  }

  // POST /post
  async insertNewPost(req, res) {
    try {
      const { userId, title, body } = req.body;
      if (userId && title && body) {
        const inserted = await insertPost({ userId, title, body });
        if (inserted) {
          return res.json({
            status: 200,
            message: "New post is created",
          });
        }
        return res.json({
          message: "Can not create new post",
        });
      }
      res.json({
        message: "userId, title, body missing",
      });
    } catch (error) {
      console.log(
        `file: posts.controller.js:28 ~ PostsController ~ insertNewPost ~ error:`,
        error
      );
      res.json({
        message: "Something wrong!!!",
      });
    }
  }
}

export default PostsController;
