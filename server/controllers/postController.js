const User = require("../model/userModel");
const Post = require("../model/postModel");
module.exports.createPost = async (req, res) => {
  try {
    const { postedBy, title,department,description,location,contract_duration,mail} = req.body;
    // if (!postedBy || !title ||!department||!description||!location||!contract_duration||!mail) {
    //   return res
    //     .status(400)
    //     .json({ error: "Postedby and text fields are required" });
    // }
    const user = await User.findById(postedBy);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // if (user._id.toString() !== req.user._id.toString()) {
    //   return res.status(401).json({ error: "Unauthorized to create post" });
    // }
    

    const newPost = new Post({ postedBy, title,department,description,location,contract_duration,mail });
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

module.exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};  //for the selected user

module.exports.getAllPost = async(req,res)=>{
  try {
    const posts = await Post.find();
    if (!posts || posts.length === 0) {
      return res.status(200).json({ error: "No posts found" });
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports.deletePost = async (req, res) => {
  console.log("you called me ");
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // if (post.postedBy.toString() !== req.user._id.toString()) {
    //   return res.status(401).json({ error: "Unauthorized to delete post" });
    // }

    // if (post.img) {
    //   const imgId = post.img.split("/").pop().split(".")[0];
    //   await cloudinary.uploader.destroy(imgId);
    // }

    await Post.findByIdAndDelete(req.params.id);
    // console.log("you called me ")

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getUserPosts = async (req, res) => {
  const { username } = req.params;
  console.log(username);
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const posts = await Post.find({ postedBy: user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
