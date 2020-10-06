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
			threadText
			genre
			createdAt
			username
			posts {
				postBody
				username
				createdAt
			}
		}
	}
`;

// addPost(threadId: ID!, postBody: String!): Thread
export const ADD_POST = gql`
	mutation addPost($threadId: ID!, $postBody: String!) {
		addPost(threadId: $threadId, postBody: $postBody) {
			postBody
			username
			createdAt
		}
	}
`;

// addFriend(friendId: ID!): User
export const ADD_FRIEND = gql`
	mutation addFriend($friendId: ID!) {
		addFriend(friendId: $friendId) {
			_id
			username
		}
	}
`;
