const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    threads: [Thread]
    friends: [User]
  }

  type Thread {
    _id: ID
    threadText: String
    createdAt: String
    username: String
    postCount: Int
    posts: [Post]
  }

  type Post {
    _id: ID
    postBody: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    threads(username: String): [Thread]
    thread(_id: ID!): Thread
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThread(threadText: String!): Thread
    addPost(threadId: ID!, postBody: String!): Thread
    addFriend(friendId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;