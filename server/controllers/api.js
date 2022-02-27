const Post = require('../models/posts');

module.exports = class API {
    //fetch all posts
    static async fetchAllPost(req, res){
        try{
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) {
                res.status(404).json({ message: err.message});
        }
    }

    //fetch post by ID
    static async fetchPostByID(req, res){
        res.send("Fetch Post By ID");
    }

    //create a post
    static async createPost(req, res){
        res.send("Create Post");
    }

    //update a post
    static async updatePost(req, res){
        res.send("Update Post");
    }

    //delete a post
    static async deletePost(req, res){
        res.send("Delete Post");
    }
};