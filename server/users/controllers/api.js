const User = require('../model/User');
const fs = require("fs");

module.exports = class API {
    static async fetchAllUser(req, res){
        try{
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
                res.status(404).json({ message: err.message});
        }
    }

    static async fetchUserByID(req, res){
        const id = req.params.id;
        try{
            const user = await User.findById(id);
            res.status(200).json(user);
        } catch(err){
            res.status(404).json({message: err.message});
        }
    }

    static async deleteUser(req, res){
        const id = req.params.id;
        try{
            const result = await User.findByIdAndDelete(id);
            res.status(200).json({message: 'User deleted successfully'});
        }catch(err) {
            res.status(404).json({message: err.message});
        }
    }
}