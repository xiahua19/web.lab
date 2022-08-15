const mongoose = require("mongoose");

// define a story schema for the database
const StorySchema = new mongoose.Schema({
    creator_name: String,
    content: String,
})

module.exports = mongoose.model("story", StorySchema);