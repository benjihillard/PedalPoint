import { Combobox, TextInput, useCombobox } from '@mantine/core';
import { useState } from 'react';
import { useOpenStreetMapLocation } from '../../../reactQuery/useOpenStreetMapLocation';

function LocationOptions(searchQuery: string) {
  const { data, isLoading, isError } = useOpenStreetMapLocation(searchQuery);
  if (isLoading) {
    return <Combobox.Empty>Loading...</Combobox.Empty>;
  }

  if (isError || !data?.length) {
    return <Combobox.Empty>No results</Combobox.Empty>;
  }

  // Remove duplicates based on place_id
  const uniqueOptions = data.filter(
    (option, index, self) =>
      index === self.findIndex(o => o.place_id === option.place_id)
  );

  return (
    <>
      {uniqueOptions.map(option => (
        <Combobox.Option value={option} key={option.place_id}>
          {option.display_name}
        </Combobox.Option>
      ))}
    </>
  );
}

interface LocationInputProps {
  form: any;
  label?: string;
  placeholder?: string;
  formField: string;
}

export function LocationInput({
  form,
  label = 'Location',
  placeholder = 'Enter a location',
  formField,
}: LocationInputProps) {
  const combobox = useCombobox();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Combobox
      onOptionSubmit={optionValue => {
        setSearchQuery(optionValue?.display_name);
        form.setFieldValue(formField, optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          required
          label={label}
          placeholder={placeholder}
          value={searchQuery}
          onChange={event => {
            const value = event.currentTarget.value;
            setSearchQuery(value);
            form.setFieldValue(formField, value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          error={form.errors[formField]}
        />
      </Combobox.Target>
      <Combobox.Dropdown>{LocationOptions(searchQuery)}</Combobox.Dropdown>
    </Combobox>
  );
}
