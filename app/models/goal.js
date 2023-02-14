const mongoose = require('mongoose')
const commentSchema = require('./comment')

const goalSchema = new mongoose.Schema(
	{
		what: {
			type: String,
			required: true
		},
		type: {
			type: String,
            enum: ['Finance', 'Lifestyle', 'Health-Fitness'],
			required: true
		},
        whenEnd:{
            type: Date,
        },
        why: {
            type: String,
            required: true
        },
        isComplete: {
            type: Boolean,
            required: true
        },
        completedDate: {
            type: Date
        },
        isPublic: {
            type: Boolean,
            required: true
        },
        comments: [commentSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
	},
	{
		timestamps: true,
        toObject: { virtuals: true},
        toJSON: { virtuals: true }
	}
)

goalSchema.virtual('daysLeft').get(function () {
    if (this.whenEnd) {
        return Math.round((this.whenEnd - Date.now())/8.64e+7)
    } else {
        return null
    }
})

goalSchema.virtual('finishedDays').get(function () {
    if (this.completedDate && this.isComplete == true) {
        return Math.round((this.completedDate - this.createdAt)/8.64e+7)
    } else {
        return null
    }
})



module.exports = mongoose.model('Goal', goalSchema)
