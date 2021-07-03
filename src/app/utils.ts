import { useState } from 'react';
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

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
