const mongoose = require('mongoose');

const BlogsSchema = new mongoose.Schema({
    blog_name: {type: String , required: [true, 'Please provide blog name.'], trim: true},
    description: {type: String , required: [true, 'Please provide blog name.'], trim: true},
    createdBy: {type: mongoose.Types.ObjectId, required: [true, 'Please provide user']},
},{timestamps: true});

module.exports = mongoose.model('Blog',BlogsSchema);