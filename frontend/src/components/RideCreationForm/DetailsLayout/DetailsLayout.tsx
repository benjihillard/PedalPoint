import { Divider, Title } from '@mantine/core';
import { DescriptionInput } from '../DescriptionInput/DescriptionInput';
import { FlyerUpload } from '../FlyerUpload/FlyerUpload';
import { TitleInput } from '../TitleInput/TitleInput';

export function DetailsLayout({ form }: { form: any }) {
  return (
    <>
      <Title order={3} ta='left' c='blue.7'>
        Details.
      </Title>
      <TitleInput form={form} />
      <DescriptionInput form={form} />
      <FlyerUpload form={form} />
      <Divider my='sm' />
    </>
  );
}
