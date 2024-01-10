export const setItemToLocalStorage = (key: string, value: any) => {
    if (typeof window !== 'undefined') {
      try {
        const serializedValue = JSON.stringify(value);
        window.localStorage.setItem(key, serializedValue);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }
  };
  
  export const getItemFromLocalStorage = <T>(key: string): T | null => {
    if (typeof window !== 'undefined') {
      try {
        const serializedValue = window.localStorage.getItem(key);
        if (serializedValue === null) {
          return null;
        }
        return JSON.parse(serializedValue) as T;
      } catch (error) {
        console.error('Error getting data from localStorage:', error);
      }
    }
    return null;
  };
  