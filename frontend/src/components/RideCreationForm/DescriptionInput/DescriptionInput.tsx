import { Textarea } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';

interface DescriptionInputProps {
  form: UseFormReturnType<{
    title: string;
    description: string;
    flyer: File | null;
  }>;
}

export function DescriptionInput({ form }: DescriptionInputProps) {
  return (
    <Textarea
      label='Description'
      placeholder='Describe the ride, route, and general vibe'
      required
      size='lg'
      minRows={10}
      key={form.key('description')}
      resize='vertical'
      {...form.getInputProps('description')}
    />
  );
}
