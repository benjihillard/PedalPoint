import { Checkbox, Flex, NumberInput, Text } from '@mantine/core';

export function RideSizeInput({ form }: { form: any }) {
  return (
    <>
      <Text ta='left' size='sm'>
        Rider limit
      </Text>
      <Flex gap='md' align='center'>
        <NumberInput
          placeholder='Max number of riders'
          min={2}
          max={100}
          disabled={form.values.isUnlimited}
          value={form.values.riderLimit}
          onChange={value => form.setFieldValue('riderLimit', value)}
          error={form.errors.riderLimit}
        />
        <Checkbox
          label='Unlimited riders'
          checked={form.values.isUnlimited}
          onChange={event => {
            const checked = event.currentTarget.checked;
            form.setFieldValue('isUnlimited', checked);
            if (checked) {
              form.setFieldValue('riderLimit', Infinity);
            } else {
              form.setFieldValue('riderLimit', 2);
            }
          }}
        />
      </Flex>
    </>
  );
}
