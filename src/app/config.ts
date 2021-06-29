export const colors: string[] = [
  '#DFEBEB',
  '#ECB8D4',
  '#EC5F65',
  '#AA87A8',
  '#FFEA6D',
  '#FFD9B2',
  '#1563AA',
  '#CB970A',
  '#F47B71',
  '#56A59B',
  '#6CC4C7',
  '#CADCDC',
  '#FA5735',
  '#2F96FA',
  '#45C349',
];

export type Rating = 'empty_pot' | 'fresh_plant' | 'coming_along' | 'bloom';

export const RATING: Record<string, Rating> = {
  new: 'empty_pot',
  beginner: 'fresh_plant',
  intermediate: 'coming_along',
  expert: 'bloom',
};
