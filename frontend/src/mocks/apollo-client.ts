import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  Observable,
} from '@apollo/client';
import { mockResolvers } from './resolvers';

// Create a mock link that intercepts GraphQL operations
const mockLink = new ApolloLink(operation => {
  return new Observable(observer => {
    try {
      const { operationName, variables } = operation;

      // Handle queries
      if (operationName === 'GetRides') {
        const result = mockResolvers.Query.rides();
        observer.next({ data: { rides: result } });
        observer.complete();
      } else if (operationName === 'GetRide') {
        const result = mockResolvers.Query.ride(
          null,
          variables as { id: string }
        );
        observer.next({ data: { ride: result } });
        observer.complete();
      } else if (operationName === 'GetUserProfile') {
        const result = mockResolvers.Query.user(
          null,
          variables as { id: string }
        );
        observer.next({ data: { user: result } });
        observer.complete();
      }
      // Handle mutations
      else if (operationName === 'CreateRide') {
        const result = mockResolvers.Mutation.createRide(
          null,
          variables as { input: any }
        );
        observer.next({ data: { createRide: result } });
        observer.complete();
      } else if (operationName === 'JoinRide') {
        const result = mockResolvers.Mutation.joinRide(
          null,
          variables as { rideId: string; userId: string }
        );
        observer.next({ data: { joinRide: result } });
        observer.complete();
      } else {
        // Default response for unknown operations
        observer.next({ data: {} });
        observer.complete();
      }
    } catch (error) {
      observer.error(error);
    }
  });
});

export const mockClient = new ApolloClient({
  link: mockLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});
