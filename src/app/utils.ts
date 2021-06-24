export function getDateString(date: Date): string {
  const dateString = date.toISOString();
  return dateString.split('T')[0];
}
