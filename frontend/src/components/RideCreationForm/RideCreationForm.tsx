import { Flex, Paper, Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { SubmitButton } from './SubmitButton/SubmitButton';
// Layouts
import { DetailsLayout } from './DetailsLayout/DetailsLayout';
import { LogisticsLayout } from './LogisticsLayout/LogisticsLayout';
import { RatingLayout } from './RatingLayout/RatingLayout';
import { RouteLayout } from './RouteLayout/RouteLayout';
import { TimelineLayout } from './TimelineLayout/TimelineLayout';
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
      startLocation: null as string | null,
      endLocation: null as string | null,
      isLoop: false,
      routeLink: '' as string,
      tags: [] as string[],
      suggestedGear: [] as string[],
      riderLimit: Infinity as number,
      isUnlimited: true as boolean,
      requiredGear: [] as string[],
      difficulty: 1 as number,
      terrain: 1 as number,
      pace: 0 as number,
      distance: 0 as number,
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
              <DetailsLayout form={form} />
              <TimelineLayout form={form} />
              <RouteLayout form={form} />
              <LogisticsLayout form={form} />
              <RatingLayout form={form} />
            </Stack>
            <SubmitButton />
          </form>
        </Stack>
      </Paper>
    </Flex>
  );
}
