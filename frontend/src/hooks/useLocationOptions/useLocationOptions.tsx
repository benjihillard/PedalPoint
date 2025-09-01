import { Combobox } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useOpenStreetMapLocation } from '../../reactQuery/useOpenStreetMapLocation';

export const useLocationOptions = (searchQuery: string) => {
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const {
    data: locations,
    isLoading,
    isError,
  } = useOpenStreetMapLocation(debouncedQuery);

  console.log('locations', locations);

  if (isLoading) {
    return [<Combobox.Empty key='loading'>Loading...</Combobox.Empty>];
  }

  if (isError) {
    return [<Combobox.Empty key='error'>No results found</Combobox.Empty>];
  }

  if (!locations?.length) {
    return [<Combobox.Empty key='empty'>No results found</Combobox.Empty>];
  }

  // Filter duplicates based on display_name
  const uniqueLocations = locations.filter(
    (location, index, self) =>
      index === self.findIndex(l => l.display_name === location.display_name)
  );

  return uniqueLocations.map((location: any, index: number) => (
    <Combobox.Option
      value={location.display_name}
      key={`${location.display_name}-${index}`}
    >
      {location.display_name}
    </Combobox.Option>
  ));
};
