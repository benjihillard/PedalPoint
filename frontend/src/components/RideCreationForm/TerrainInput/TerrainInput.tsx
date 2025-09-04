import { Slider, Title } from '@mantine/core';

enum TerrainLevel {
  Paved = 1,
  Rolling = 2,
  Hilly = 3,
  LightGravel = 4,
  Technical = 5,
}

const TERRAIN_LABELS = {
  [TerrainLevel.Paved]: '🛣️ Flat & Paved',
  [TerrainLevel.Rolling]: '🌊 Rolling Hills',
  [TerrainLevel.Hilly]: '⛰️ Hilly',
  [TerrainLevel.LightGravel]: '🌲 Light Gravel/Trail',
  [TerrainLevel.Technical]: '🏔️ Technical Off-road',
} as const;

const TERRAIN_ICONS = {
  [TerrainLevel.Paved]: '🛣️',
  [TerrainLevel.Rolling]: '🌊',
  [TerrainLevel.Hilly]: '⛰️',
  [TerrainLevel.LightGravel]: '🌲',
  [TerrainLevel.Technical]: '🏔️',
} as const;

export function TerrainInput({ form }: { form: any }) {
  return (
    <>
      <Title order={6} ta='left' size='sm'>
        Terrain type
      </Title>
      <Slider
        label={value => TERRAIN_LABELS[value as TerrainLevel]}
        min={TerrainLevel.Paved}
        max={TerrainLevel.Technical}
        marks={Object.values(TerrainLevel)
          .filter(v => !isNaN(Number(v)))
          .map(value => ({
            value: Number(value),
            label: TERRAIN_ICONS[value as TerrainLevel],
          }))}
        value={form.values.terrain}
        onChange={value => form.setFieldValue('terrain', value)}
      />
    </>
  );
}
