import { Slider, Title } from '@mantine/core';

const DifficultyLevel = {
  Beginner: 1,
  Easy: 2,
  Intermediate: 3,
  Hard: 4,
  Expert: 5,
} as const;

const DIFFICULTY_LABELS = {
  [DifficultyLevel.Beginner]: '🌱 Beginner',
  [DifficultyLevel.Easy]: '🚲 Easy',
  [DifficultyLevel.Intermediate]: '⚡ Intermediate',
  [DifficultyLevel.Hard]: '🔥 Hard',
  [DifficultyLevel.Expert]: '💪 Expert',
} as const;

const DIFFICULTY_ICONS = {
  [DifficultyLevel.Beginner]: '🌱',
  [DifficultyLevel.Easy]: '🚲',
  [DifficultyLevel.Intermediate]: '⚡',
  [DifficultyLevel.Hard]: '🔥',
  [DifficultyLevel.Expert]: '💪',
} as const;

export function DifficultyInput({ form }: { form: any }) {
  return (
    <>
      <Title order={6} ta='left' size='sm'>
        Difficulty level
      </Title>
      <Slider
        label={value => DIFFICULTY_LABELS[value as DifficultyLevel]}
        min={DifficultyLevel.Beginner}
        max={DifficultyLevel.Expert}
        marks={Object.values(DifficultyLevel)
          .filter(v => !isNaN(Number(v)))
          .map(value => ({
            value: Number(value),
            label: DIFFICULTY_ICONS[value as DifficultyLevel],
          }))}
        value={form.values.difficulty}
        onChange={value => form.setFieldValue('difficulty', value)}
      />
    </>
  );
}
