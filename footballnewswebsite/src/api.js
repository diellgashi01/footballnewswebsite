import axios from 'axios';
const url = "/api/post";

export default class API {
    //to get all the posts from the server
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }
    //to get single post by id 
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    //to insert post into database 
    static async addPost(post){
        const res = await axios.get(url, post);
        return res.data;
    }
}
