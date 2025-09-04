import { Flex, NumberInput } from '@mantine/core';

export function DistanceInput({ form }: { form: any }) {
  return (
    <>
      <Flex gap='md' align='center' mt='xl'>
        <NumberInput
          label='Distance in miles (estimated)'
          placeholder='Enter route distance'
          min={0}
          max={500}
          value={form.values.distance}
          onChange={value => form.setFieldValue('distance', value)}
        />
      </Flex>
    </>
  );
}
