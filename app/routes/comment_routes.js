const express = require('express')

const passport = require('passport')

const Goal = require('../models/goal')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })


const router = express.Router()

// ROUTES

// POST -> Create a comment

router.post('/comment/:goalId', requireToken, removeBlanks, (req, res, next) => {
    req.body.comment.owner = req.user.id
    const comment = req.body.comment
    const goalId = req.params.goalId
    Goal.findById(goalId)
        .then(handle404)
        .then(goal => {
            
            console.log('the goal: ', goal)
            console.log('the comment: ', comment)
            goal.comments.push(comment)
            return goal.save()
        })
        .then(goal => res.status(201).json({ goal: goal }))
        // pass errors along to our error handler
        .catch(next)
})

// DELETE -> Delete a comment

router.delete('/comment/:goalId/:commentId', requireToken, (req, res, next) => {
    const goalId = req.params.goalId
    const commentId = req.params.commentId
    Goal.findById(goalId)
    .then(handle404)
    .then(goal => {
        const theComment = goal.comments.id(commentId)
        requireOwnership(req, goal)
        theComment.remove()
        return goal.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router