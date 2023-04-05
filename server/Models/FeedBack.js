// Author: Created By: Aneri Shah
const mongoose = require('mongoose');

const FeedBack = new mongoose.Schema({
    courseId: { 
        type: String, 
        requird: true 
    },
    userId: { 
        type: String, 
        requird: true 
    },
    rating: {
        type: Number,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('FeedBack', FeedBack);