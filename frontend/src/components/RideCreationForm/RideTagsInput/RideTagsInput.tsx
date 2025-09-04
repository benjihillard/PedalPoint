import { TagsInput } from '@mantine/core';

export function RideTagsInput({ form }: any) {
  return (
    <TagsInput
      label='Tags'
      description='This is an oppertunity to add tags and flags for your ride! pick up to 8 from the preapproved list or make up fun ones of your own!'
      clearable
      max={8}
      data={['18+', '21+', 'Family Friendly', 'Covid Precautions']}
      onChange={value => form.setFieldValue('tags', value)}
      value={form.values.tags}
    />
  );
}
