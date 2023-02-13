const mongoose = require('mongoose')

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
        isPublic: {
            type: Boolean,
            required: true
        },
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

// goalSchema.virtual('countdown').get(function () {
//     if (whenEnd) {
//         return Date.now
//     } else {
//         return null
//     }
// })

module.exports = mongoose.model('Goal', goalSchema)
