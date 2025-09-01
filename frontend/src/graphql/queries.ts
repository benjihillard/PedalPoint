import { gql } from '@apollo/client';

// Query for fetching all rides
export const GET_RIDES = gql`
  query GetRides {
    rides {
      id
      title
      description
    }
  }
`;

// Query for fetching a single ride
export const GET_RIDE = gql`
  query GetRide($id: ID!) {
    ride(id: $id) {
      id
      title
      description
    }
  }
`;
