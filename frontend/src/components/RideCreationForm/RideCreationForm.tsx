import { Divider, Flex, Paper, Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DescriptionInput } from './DescriptionInput/DescriptionInput';
import { EndTimeInput } from './EndTimeInput/EndTimeInput';
import { FlyerUpload } from './FlyerUpload/FlyerUpload';
import { LocationInput } from './LocationInput/LocationInput';
import { MeetTimeInput } from './MeetTimeInput/MeetTimeInput';
import { SubmitButton } from './SubmitButton/SubmitButton';
import { TitleInput } from './TitleInput/TitleInput';
import { WheelsDownTimeInput } from './WheelsDownTimeInput/WheelsDownTimeInput';
// Icons

// Validators
import {
    validateEndTime,
    validateMeetTime,
    validateWheelsDownTime,
} from '../../utils/validators/dateValidators';

export function RideCreationForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      description: '',
      flyer: null as File | null,
      meetTime: null as Date | string | null,
      wheelsDownTime: null as string | null,
      endTime: null as Date | null,
    },

    validate: {
      title: value =>
        value.length < 3 ? 'Title must be at least 3 characters' : null,
      description: value =>
        value.length < 10 ? 'Description must be at least 10 characters' : null,
      meetTime: validateMeetTime,
      wheelsDownTime: (value: Date | null): string | null =>
        validateWheelsDownTime(value, form.values.meetTime),
      endTime: (value: Date | null): string | null =>
        validateEndTime(value, form.values.wheelsDownTime),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    console.log('Form submitted:', values);
  };

  return (
    <Flex justify='center' align='center' p='xl' bg='gray.0'>
      <Paper shadow='md' p='xl' radius='md' w='100%' maw={600} withBorder>
        <Stack gap='lg'>
          <Title order={2} ta='left' c='blue.7'>
            Start A New Ride
          </Title>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap='md'>
              <TitleInput form={form} />
              <DescriptionInput form={form} />
              <FlyerUpload form={form} />
              <Divider my='sm' />
              <Title order={3} ta='left' c='blue.7'>
                Timeline.
              </Title>
              <MeetTimeInput form={form} />
              <WheelsDownTimeInput form={form} />
              <EndTimeInput form={form} />
              <Divider my='sm' />
              <Title order={3} ta='left' c='blue.7'>
                Route.
              </Title>
              <LocationInput form={form} />
            </Stack>
            <SubmitButton />
          </form>
        </Stack>
      </Paper>
    </Flex>
  );
}
