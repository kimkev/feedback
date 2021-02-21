const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const feedbackCopy = require('../models/FeedbackModel')
const bcrypt = require('bcrypt')


// default submit page
router.post('/', async (request, response) => {
    const feedback = new feedbackCopy({
        name:request.body.name,
        message:request.body.message
    })
    feedback.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

// all feedback page
router.get('/feedback', async (request,response) => {
    try {
        const feedbacks = await feedbackCopy.find();
        response.json(feedbacks);
    } catch (err) {
        response.json({ message: err });
    }
})


module.exports = router