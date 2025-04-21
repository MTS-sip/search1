import { gql } from 'graphql-tag';

const typeDefs = gql`
  # Top-level Query
  type Query {
    me: User
  }

  # Top-level Mutation
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
  }

  # Input for saving a book
  input BookInput {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  # Book type definition
  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  # Auth payload returned after login/signup
  type Auth {
    token: String!
    user: User
  }

  # User type definition
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
`;

export default typeDefs;
