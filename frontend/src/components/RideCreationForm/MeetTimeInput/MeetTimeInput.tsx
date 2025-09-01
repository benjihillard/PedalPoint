import { DateTimePicker } from '@mantine/dates';
import type { UseFormReturnType } from '@mantine/form';

interface MeetTimeInputProps {
  form: UseFormReturnType<{
    title: string;
    description: string;
    flyer: File | null;
    meetTime: Date | string | null;
    wheelsDownTime: Date | null;
    endTime: Date | null;
  }>;
}

export function MeetTimeInput({ form }: MeetTimeInputProps) {
  return (
    <DateTimePicker
      required
      dropdownType='modal'
      label='Meet Time'
      placeholder='Pick a time to meet up'
      clearable
      valueFormat='DD MMM YYYY hh:mm A'
      value={form.values.meetTime}
      onChange={value => form.setFieldValue('meetTime', value)}
      error={form.errors.meetTime}
      timePickerProps={{
        withDropdown: true,
        popoverProps: { withinPortal: false },
        format: '12h',
      }}
    />
  );
}
