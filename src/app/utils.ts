import { Rating, RATING } from './config';

export function getDateString(date: Date): string {
  const dateString = date.toISOString();
  return dateString.split('T')[0];
}

export function getRating(timesHabitCompleted: number): Rating {
  if (timesHabitCompleted === 0) {
    return RATING.new;
  }
  if (timesHabitCompleted <= 10) {
    return RATING.beginner;
  }
  if (timesHabitCompleted <= 30) {
    return RATING.intermediate;
  }
  return RATING.expert;
}
