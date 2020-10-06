const faker = require('faker');

const db = require('../config/connection');
const { Thread, User } = require('../models');

db.once('open', async () => {
  await Thread.remove({});
  await User.remove({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insert(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create threads
  let createdThreads = [];
  for (let i = 0; i < 100; i += 1) {
    const threadText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdThread = await Thread.create({ threadText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { threads: createdThread._id } }
    );

    createdThreads.push(createdThread);
  }

  // create posts
  for (let i = 0; i < 100; i += 1) {
    const postBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomThreadIndex = Math.floor(Math.random() * createdThreads.length);
    const { _id: threadId } = createdThreads[randomThreadIndex];

    await Thread.updateOne(
      { _id: threadId },
      { $push: { posts: { postBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
