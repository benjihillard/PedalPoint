import { TagsInput } from '@mantine/core';

export function RequiredGearInput({ form }: any) {
  return (
    <TagsInput
      label='Required Gear'
      description='Add required gear that riders must bring.'
      clearable
      max={8}
      data={[
        'Lights',
        'Lock',
        'Water',
        'Helmet',
        'Spare Tube',
        'Tools',
        'Snacks',
      ]}
      onChange={value => form.setFieldValue('requiredGear', value)}
      value={form.values.requiredGear}
    />
  );
}
