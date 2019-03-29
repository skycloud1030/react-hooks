import { useCallback, useState } from "react";

export default function useLocalStorage(key = "", initialValue = "") {
  const [item, setValue] = useState(() => {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    }
    localStorage.setItem(key, initialValue);
    return initialValue;
  }, []);

  const setItem = useCallback(
    value => {
      setValue(value);
      localStorage.setItem(key, value);
    },
    [item]
  );

  return [item, setItem];
}
