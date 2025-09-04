import { TagsInput } from '@mantine/core';

export function SuggestedGearInput({ form }: any) {
  return (
    <TagsInput
      label='Suggested Gear'
      description='Add suggested gear that riders should bring.'
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
      onChange={value => form.setFieldValue('suggestedGear', value)}
      value={form.values.suggestedGear}
    />
  );
}
