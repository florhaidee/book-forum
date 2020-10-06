const { Schema, model } = require('mongoose');
const moment = require('moment');
const postSchema = require('./Post');

const threadSchema = new Schema(
	{
		threadText: {
			type: String,
			required: 'You need to leave a thread!',
			minlength: 1,
			maxlength: 280,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) =>
				moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
		},
		username: {
			type: String,
			required: true,
		},
		posts: [postSchema],
	},
	{
		toJSON: {
			getters: true,
		},
	}
);

threadSchema.virtual('postCount').get(function () {
	return this.posts.length;
});

const Thread = model('Thread', threadSchema);

module.exports = Thread;
