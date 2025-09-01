import { DateTimePicker } from '@mantine/dates';
import type { UseFormReturnType } from '@mantine/form';

interface WheelsDownTimeInputProps {
  form: UseFormReturnType<{
    title: string;
    description: string;
    flyer: File | null;
    meetTime: Date | string | null;
    wheelsDownTime: Date | null;
    endTime: Date | null;
  }>;
}

export function WheelsDownTimeInput({ form }: WheelsDownTimeInputProps) {
  return (
    <DateTimePicker
      required
      dropdownType='modal'
      label='Wheels Down'
      placeholder='Pick a time for the ride to start.'
      clearable
      valueFormat='DD MMM YYYY hh:mm A'
      value={form.values.wheelsDownTime}
      onChange={value =>
        form.setFieldValue('wheelsDownTime', value as Date | null)
      }
      error={form.errors.wheelsDownTime}
      timePickerProps={{
        withDropdown: true,
        popoverProps: { withinPortal: false },
        format: '12h',
      }}
    />
  );
}
