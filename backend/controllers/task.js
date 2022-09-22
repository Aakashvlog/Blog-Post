const User = require('../model/Users');
const Blog = require('../model/Blogs');

const updateTask = async (req,res) => {
    try {
        const {userId, blogId, description} = req.body;
        if(!userId || !blogId){
            res.json({msg: 'userId or blogId is missing'});
        }
        const blog = await Blog.findOneAndUpdate({createdBy: userId, _id: blogId},{$set: {description}} )
        if(!blog){
            res.json({msg: 'No record found.'});
        }
        
        res.json({description});
    } catch (err) {
        res.json(err);
    }
}

const deleteTask = async (req,res) => {
    try {
        const {blogId} =req.body;
        if(!blogId){
            res.json({msg: 'blogId missing'});
        }
        const blog = await Blog.findOneAndRemove({_id: blogId});

        if(!blog){
            res.json({msg: 'No blog found.'})
        }

        res.json({blog});
    } catch (err) {
        res.json(err);
    }
}

const createTask = async (req, res) => {
    try {
        const { blog_name, description, userId } = req.body;
        if (!blog_name || !description || !userId) {
            res.json({ msg: 'Some fields are missing' });
        }

        const blog = await Blog.create({ blog_name, description, createdBy: userId });

        res.json({ blog });
    } catch (err) {
        res.json(err);
    }
}

const getAllTask = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            res.json({ msg: 'UserId missing' });
        }
        const blogs = await Blog.find({ createdBy: userId });

        res.json({ count: blogs.length, blogs });
    } catch (err) {
        res.json(err);
    }
}

const getATask = async (req, res) => {
    try {
        const { userId, blogId } = req.body;

        if (!userId || !blogId) {
            res.json({ msg: 'UserId or blogId missing' });
        }
        const blog = await Blog.findOne({ createdBy: userId, _id: blogId });
        if(!blog){
            res.json({msg: 'No record found.'})
        }

        res.json( blog );
    } catch (err) {
        res.json(err);
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            res.json({msg: 'Email or Password missing.'});
        }

        const user = await User.findOne({email});

        !user || user.password !== password ? res.status(200).json({msg: 'Invalid email or password'}) :
        res.status(200).json({email: user.email, userId: user._id, name: user.name});     
    } catch (err) {
        res.status(400).json(err);
    }
}

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.json({ msg: 'Something missing name, email or password.' })
        }

        const user = await User.create({ name, email, password });

        res.json({name, userId: user._id, email});
    } catch (err) {
        if(err.keyPattern){
            res.json({msg: 'Email already exist.'});
        } else if (err.errors){
            res.json(err.errors)
        }
    }

}

const getData = (req,res)=>{
    res.json({name:'Aakash', code:24});
}

module.exports = {
    updateTask,
    deleteTask,
    createTask,
    getAllTask,
    login,
    signup,
    getATask
}

