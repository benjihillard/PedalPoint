const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Ride {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    hello: String
    rides: [Ride!]!
    ride(id: ID!): Ride
  }

  type Mutation {
    createRide(input: CreateRideInput!): Ride!
    deleteRide(id: ID!): Ride!
  }

  input CreateRideInput {
    title: String!
    description: String!
  }
`;

module.exports = { typeDefs };
