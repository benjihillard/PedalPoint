import { Button, Group } from '@mantine/core';

export function SubmitButton() {
  return (
    <Group justify='flex-end' mt='xl'>
      <Button type='submit' size='lg' variant='filled' color='blue'>
        Create Ride
      </Button>
    </Group>
  );
}
