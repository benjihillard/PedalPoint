import { Divider, Title } from '@mantine/core';
import { DifficultyInput } from '../DifficultyInput/DifficultyInput';
import { DistanceInput } from '../DistanceInput/DistanceInput';
import { PaceInput } from '../PaceInput/PaceInput';
import { TerrainInput } from '../TerrainInput/TerrainInput';

export function RatingLayout({ form }: { form: any }) {
  return (
    <>
      <Title order={3} ta='left' c='blue.7'>
        Difficulty Rating.
      </Title>
      <DifficultyInput form={form} />
      <TerrainInput form={form} />
      <PaceInput form={form} />
      <DistanceInput form={form} />
      <Divider my='sm' />
    </>
  );
}
