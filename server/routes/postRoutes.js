const {
  createPost,
  deletePost,
  getPost,
  getUserPosts,
  getAllPost,
} = require("../controllers/postController");

const router = require("express").Router();
router.get("/:id", getPost);
router.get("/user/:username", getUserPosts);
router.post("/create", createPost);
router.delete("/:id", deletePost);
router.get("/", getAllPost);
module.exports = router;
