const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a course title']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    weeks: {
        type: String,
        required: [true, 'Please add weeks']
    },
    tuition: {
        type: Number,
        required: [true, 'Please add tuition'],

    },
    minimumSkill: {
        type: String,
        required: [true, 'Please add minimum skill'],
        enum: ['beginner', 'intermediate', 'advanced']
    },
    scholarshipAvailable: {
        type: Boolean,
        default: false,
        required: [true, 'Please adda a description'],

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    bootcamp: {
        type: mongoose.Schema.ObjectId,
        ref: 'Bootcamp',
        required: true
    }
});


module.exports = mongoose.model('Course', CourseSchema);

