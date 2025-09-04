import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface OpenStreetMapLocation {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class?: string;
  type?: string;
  place_rank?: number;
  importance?: number;
  addresstype?: string;
  name?: string;
  display_name: string;
  address: {
    shop?: string;
    house_number?: string;
    road?: string;
    neighbourhood?: string;
    city?: string;
    county?: string;
    state?: string;
    'ISO3166-2-lvl4'?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
  };
  boundingbox: [string, string, string, string];
}

export function useOpenStreetMapLocation(searchQuery: string) {
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 1500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return useQuery<OpenStreetMapLocation[]>({
    queryKey: ['location', debouncedQuery],
    queryFn: async () => {
      if (debouncedQuery.length < 3) {
        return [];
      }

      const response = await fetch(
        `http://192.168.86.59:3001/api/location/search?q=${encodeURIComponent(debouncedQuery)}`
      );
      const data = await response.json();
      return data;
    },
    enabled: debouncedQuery.length >= 3,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
