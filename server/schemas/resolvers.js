const { User, Thread } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers = {
	Query: {
		threads: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Thread.find(params).sort({ createdAt: -1 });
		},
		thread: async (parent, { _id }) => {
			return Thread.findOne({ _id });
		},
		// get all users
		users: async () => {
			return User.find()
				.select('-__v -password')
				.populate('friends')
				.populate('threads');
		},
		// get a user by username
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select('-__v -password')
				.populate('friends')
				.populate('threads');
		},
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id })
					.select('-__v -password')
					.populate('threads')
					.populate('friends');

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);
			return { token, user };
		},
		addThread: async (parent, args, context) => {
			if (context.user) {
				const thread = await Thread.create({
					...args,
					username: context.user.username,
				});

				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { threads: thread._id } },
					{ new: true }
				);

				return thread;
			}

			throw new AuthenticationError('You need to be logged in!');
		},
		addPost: async (parent, { threadId, postBody }, context) => {
			if (context.user) {
				const updatedThread = await Thread.findOneAndUpdate(
					{ _id: threadId },
					{
						$push: {
							posts: {
								postBody,
								username: context.user.username,
							},
						},
					},
					{ new: true, runValidators: true }
				);

				return updatedThread;
			}

			throw new AuthenticationError('You need to be logged in!');
		},
		addFriend: async (parent, { friendId }, context) => {
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $addToSet: { friends: friendId } },
					{ new: true }
				).populate('friends');

				return updatedUser;
			}

			throw new AuthenticationError('You need to be logged in!');
		},
	},
};

module.exports = resolvers;
