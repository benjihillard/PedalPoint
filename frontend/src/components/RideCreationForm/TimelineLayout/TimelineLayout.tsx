import { Divider, Title } from '@mantine/core';
import { EndTimeInput } from '../EndTimeInput/EndTimeInput';
import { MeetTimeInput } from '../MeetTimeInput/MeetTimeInput';
import { WheelsDownTimeInput } from '../WheelsDownTimeInput/WheelsDownTimeInput';

export function TimelineLayout({ form }: { form: any }) {
  return (
    <>
      <Title order={3} ta='left' c='blue.7'>
        Timeline.
      </Title>
      <MeetTimeInput form={form} />
      <WheelsDownTimeInput form={form} />
      <EndTimeInput form={form} />
      <Divider my='sm' />
    </>
  );
}
