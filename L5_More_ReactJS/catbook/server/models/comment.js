const mongoose = require("mongoose");

// define a comment schema for the database
const CommentSchema = new mongoose.Schema({
    creator_name: String,
    parent: String,
    content: String,
})

module.exports = mongoose.model("comment", CommentSchema);