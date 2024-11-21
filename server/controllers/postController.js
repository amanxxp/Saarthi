const User = require("../model/userModel");
const Post = require("../model/postModel");
const axios = require("axios");
const redisClient = require("../services/RedisClient.js");

module.exports.createPost = async (req, res) => {
  try {
    const {
      postedBy,
      title,
      department,
      description,
      location,
      contract_duration,
      mail,
    } = req.body;

    // Check if the user exists
    const user = await User.findById(postedBy);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create a new post
    const newPost = new Post({
      postedBy,
      title,
      department,
      description,
      location,
      contract_duration,
      mail,
    });
    await newPost.save();

    // Update the cache with the new post list
    const allPosts = await Post.find(); // Fetch updated posts from DB
    const cacheKey = "all_posts";
    await redisClient.set(cacheKey, JSON.stringify(allPosts));
    await redisClient.expire(cacheKey, 600); // Optional TTL of 10 minutes

    res.status(201).json(newPost);
    console.log("New post created and cache updated:", newPost);
  } catch (err) {
    console.error("Error creating post:", err.message);
    res.status(500).json({ error: err.message });
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
}; //for the selected user

module.exports.getAllPost = async (req, res) => {
  try {
    const cacheKey = "all_posts";
    const cachedPosts = await redisClient.get(cacheKey);
    if (cachedPosts) {
      console.log("Cache hit");
      return res.status(200).json(JSON.parse(cachedPosts));
    }

    console.log("Cache miss, fetching from DB...");
    const posts = await Post.find();

    if (!posts || posts.length === 0) {
      return res.status(200).json({ error: "No posts found" });
    }

    await redisClient.set(cacheKey, JSON.stringify(posts));
    await redisClient.expire(cacheKey, 600);

    res.status(200).json(posts);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "An error occurred while fetching posts." });
  }
};

module.exports.getAllSchemes = async (req, res) => {
  try {
    const cacheKey = "all_schemes";
    const cachedValue = await redisClient.get(cacheKey);
    if (cachedValue) {
      // If cache exists, parse and return it
      console.log("Cache hit");
      return res.status(200).json(JSON.parse(cachedValue));
    } // If no cache, fetch data from the API
    console.log("Cache miss, fetching from API...");
    const { data } = await axios.get(
      "https://script.googleusercontent.com/macros/echo?user_content_key=jpZNSKbdezfPoYbOaVRiW1jUo8ZzE3fDGKp-LTMPWBbtNs2Tp9aOHoPFxSe9Ivh8_CxKu4y1nBOg1IGOAa_kgQgqrNN9BJSsm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHdoXoK9qgwKmSUrF2nvfheKo-24m8jOnOo-6xvYXB95hEFbGEfaQtWmYEIG47zXDxLclpQ7zUQl_XkDR7zwGFA70NCCyWEYz9z9Jw9Md8uu&lib=MU_wLem4eH-7--9PhjI0AMOYWcLBkzmkL"
    );

    const responseData = data.data;

    // Cache the data in Redis with a TTL of 10 minutes (600 seconds)
    await redisClient.set(cacheKey, JSON.stringify(responseData));
    await redisClient.expire(cacheKey, 600);

    // Return the fetched data
    res.status(200).json(responseData);
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the data." });
  }
};

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
