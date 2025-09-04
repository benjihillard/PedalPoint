import { Flex, NumberInput } from '@mantine/core';

export function PaceInput({ form }: { form: any }) {
  return (
    <>
      <Flex gap='md' align='center' mt='xl'>
        <NumberInput
          label='Average pace (miles per hour)'
          placeholder='Enter pace'
          min={0}
          max={50}
          value={form.values.pace}
          onChange={value => form.setFieldValue('pace', value)}
        />
      </Flex>
    </>
  );
}
