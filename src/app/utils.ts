export function getDateString(date: Date): string {
  const dateString = date.toISOString();
  return dateString.split('T')[0];
}

export function getRating(timesHabitCompleted: number): string {
  if (timesHabitCompleted === 0) {
    return 'empty_pot';
  }
  if (timesHabitCompleted <= 10) {
    return 'fresh_plant';
  }
  if (timesHabitCompleted <= 30) {
    return 'coming_along';
  }
  return 'bloom';
}
