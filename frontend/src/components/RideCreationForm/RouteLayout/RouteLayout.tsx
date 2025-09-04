import { Checkbox, Divider, Flex, TextInput, Title } from '@mantine/core';
import { IconArrowDown, IconUTurnLeft } from '@tabler/icons-react';
import { useState } from 'react';
import { LocationInput } from '../LocationInput/LocationInput';

export function RouteLayout({ form }: { form: any }) {
  const [isLoop, setIsLoop] = useState(false);
  return (
    <>
      <Title order={3} ta='left' c='blue.7'>
        Route.
      </Title>
      <LocationInput
        form={form}
        formField='startLocation'
        label='Start Location'
        placeholder='Enter a starting address'
      />
      <Flex align='center' gap='md' my='xs'>
        {isLoop ? (
          <IconUTurnLeft
            size={42}
            color='gray'
            style={{ transform: 'rotate(180deg)' }}
          />
        ) : (
          <IconArrowDown size={36} color='gray' />
        )}
        <Checkbox
          label='This route ends where it starts'
          checked={isLoop}
          onChange={event => {
            const checked = event.currentTarget.checked;
            setIsLoop(checked);
            form.setFieldValue('isLoop', checked);
            if (checked) {
              form.setFieldValue('endLocation', form.values.startLocation);
            } else {
              form.setFieldValue('endLocation', null);
            }
          }}
        />
      </Flex>

      {!isLoop && (
        <LocationInput
          form={form}
          formField='endLocation'
          label='End Location'
          placeholder='Enter an ending address'
        />
      )}
      <TextInput
        label='Route Link'
        placeholder='Enter a link to a route planner like Ride with GPS'
        value={form.values.routeLink}
        onChange={event => {
          form.setFieldValue('routeLink', event.currentTarget.value);
        }}
      />
      <Divider my='sm' />
    </>
  );
}
