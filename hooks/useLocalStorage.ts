import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => Promise<void>] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    const getItem = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        if (item !== null) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.error('Error reading from AsyncStorage:', error);
      }
    };

    getItem();
  }, [key]);

  const setValue = async (value: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error('Error saving to AsyncStorage:', error);
    }
  };

  return [storedValue, setValue];
}