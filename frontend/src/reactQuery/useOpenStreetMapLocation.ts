import { useQuery } from '@tanstack/react-query';

export function useOpenStreetMapLocation(searchQuery: string) {
  return useQuery({
    queryKey: ['location', searchQuery],
    queryFn: async () => {
      if (searchQuery.length < 3) {
        return [];
      }

      const response = await fetch(
        `http://192.168.86.59:3001/api/location/search?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      return data;
    },
    enabled: searchQuery.length >= 3,
    staleTime: Infinity, // Cache results forever
    gcTime: 1000 * 60 * 60, // Keep unused data for 1 hour
  });
}
