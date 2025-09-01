import { TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';

interface TitleInputProps {
  form: UseFormReturnType<{
    title: string;
    description: string;
    flyer: File | null;
  }>;
}

export function TitleInput({ form }: TitleInputProps) {
  return (
    <TextInput
      label='Ride Title'
      placeholder='Enter ride title'
      required
      size='md'
      key={form.key('title')}
      {...form.getInputProps('title')}
    />
  );
}
