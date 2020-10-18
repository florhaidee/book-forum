import gql from 'graphql-tag';

export const LOGIN = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

// addThread(threadText: String!): Thread
export const ADD_THREAD = gql`
	mutation addThread($threadText: String!, $genre: String!) {
		addThread(threadText: $threadText, genre: $genre) {
            _id
			threadText
			genre
			createdAt
			username
		}
	}
`;

// addPost(threadId: ID!, postBody: String!): Thread
export const ADD_POST = gql`
	mutation addPost($threadId: ID!, $postBody: String!) {
		addPost(threadId: $threadId, postBody: $postBody) {
            _id
			threadText
			genre
			createdAt
			username
			posts {
                _id
				postBody
				username
				createdAt
			}
		}
	}
`;

// addFriend(friendId: ID!): User
export const ADD_FRIEND = gql`
	mutation addFriend($friendId: ID!) {
		addFriend(friendId: $friendId) {
			_id
            username
            friends {
                _id
                username
            }
		}
	}
`;

export const UPDATE_THREAD = gql`
	mutation updateThread($threadId: ID!, $threadText: String!) {
		updateThread(threadId: $threadId, threadText: $threadText) {
			_id
			threadText
		}
	}
`;

export const DELETE_POST = gql`
	mutation deletePost($threadId: ID!, $postId: ID!) {
		deletePost(threadId: $threadId, postId: $postId) {
			_id
			threadText
			posts {
				_id
				postBody
			}
		}
	}
`;