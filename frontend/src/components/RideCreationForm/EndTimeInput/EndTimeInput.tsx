import { DateTimePicker } from '@mantine/dates';
import type { UseFormReturnType } from '@mantine/form';

interface EndTimeInputProps {
  form: UseFormReturnType<{
    title: string;
    description: string;
    flyer: File | null;
    meetTime: Date | string | null;
    wheelsDownTime: Date | null;
    endTime: Date | null;
  }>;
}

export function EndTimeInput({ form }: EndTimeInputProps) {
  return (
    <DateTimePicker
      required
      dropdownType='modal'
      label='End Time'
      placeholder='Pick an estimated time for the ride to finish.'
      clearable
      valueFormat='DD MMM YYYY hh:mm A'
      value={form.values.endTime}
      onChange={value => form.setFieldValue('endTime', value as Date | null)}
      error={form.errors.endTime}
      timePickerProps={{
        withDropdown: true,
        popoverProps: { withinPortal: false },
        format: '12h',
      }}
    />
  );
}
