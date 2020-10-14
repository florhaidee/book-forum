import gql from 'graphql-tag';

// me: User
export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email {
				threadText
				createdAt
				username
				genre
				postCount
			}
			threadCount
			friends {
				_id
				username
				threads {
					_id
					threadText
					createdAt
					username
					genre
					postCount
				}
				threadCount
				friends {
					_id
					username
					threadCount
				}
			}
		}
	}
`;

// users: [User]
export const QUERY_USERS = gql`
	{
		users {
			_id
			username
			threads {
				_id
				threadText
				createdAt
				username
				genre
				postCount
			}
			threadCount
			friends {
				_id
				username
				threadCount
			}
		}
	}
`;
// user(username: String!): User
export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			threads {
                _id
				threadText
				createdAt
				username
				genre
				postCount
			}
			threadCount
			friends {
				_id
				username
				threadCount
			}
		}
	}
`;
// threads(username: String): [Thread]
export const QUERY_THREADS = gql`
	query threads($username: String, $genre: String, $searchTerm: String) {
		threads(username: $username, genre: $genre, searchTerm: $searchTerm) {
			_id
			threadText
			createdAt
			username
			genre
			postCount
			posts {
				_id
				postBody
				createdAt
				username
			}
		}
	}
`;
// thread(_id: ID!): Thread
export const QUERY_THREAD = gql`
	query thread($_id: ID!) {
		thread(_id: $_id) {
            _id
			threadText
			createdAt
			username
			genre
			postCount
			posts {
                _id
				postBody
				createdAt
				username
			}
		}
	}
`;
