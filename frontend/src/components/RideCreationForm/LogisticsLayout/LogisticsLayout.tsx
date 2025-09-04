import { Divider, Title } from '@mantine/core';
import { RequiredGearInput } from '../RequiredGearInput/RequiredGearInput';
import { RideSizeInput } from '../RideSizeInput/RideSizeInput';
import { RideTagsInput } from '../RideTagsInput/RideTagsInput';
import { SuggestedGearInput } from '../SuggestedGearInput/SuggestedGearInput';

export function LogisticsLayout({ form }: { form: any }) {
  return (
    <>
      <Title order={3} ta='left' c='blue.7'>
        Logistics.
      </Title>
      <RideTagsInput form={form} />
      <RequiredGearInput form={form} />
      <SuggestedGearInput form={form} />
      <RideSizeInput form={form} />
      <Divider my='sm' />
    </>
  );
}
