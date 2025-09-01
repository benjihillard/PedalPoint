import { mockRides } from './data';

export const mockResolvers = {
  Query: {
    rides: () => mockRides,
    ride: (parent: any, { id }: { id: string }) => {
      return mockRides.find(ride => ride.id === id);
    },
  },
  Mutation: {
    createRide: (parent: any, { input }: { input: any }) => {
      const newRide = {
        id: String(mockRides.length + 1),
        title: input.title,
        description: input.description,
      };
      mockRides.push(newRide);
      return newRide;
    },
  },
};
