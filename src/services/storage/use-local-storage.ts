import { useState, useEffect, useCallback, useRef } from "react";

export function useLocalStorage<T>({
  key,
  defaultValue,
}: {
  key: string;
  defaultValue: T;
}): [
  T,
  ({ value }: { value: T | ((previousValue: T) => T) }) => void,
  boolean,
] {
  const [value, setValue] = useState<T>(defaultValue);
  const [isReady, setIsReady] = useState(false);
  const valueRef = useRef(defaultValue);

  // avoid hydration mismatch by reading after mount
  useEffect(() => {
    let nextValue = defaultValue;
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        nextValue = JSON.parse(storedValue) as T;
      }
    } catch {
      // localstorage might be unavailable
    }

    setTimeout(() => {
      valueRef.current = nextValue;
      setValue(nextValue);
      setIsReady(true);
    }, 0);
  }, [key, defaultValue]);

  // sync to localstorage after hydration
  useEffect(() => {
    if (!isReady) return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localstorage might be full or disabled
    }
  }, [key, value, isReady]);

  const setValueWithCallback = useCallback(
    ({ value: nextValue }: { value: T | ((previousValue: T) => T) }) => {
      const resolvedValue =
        typeof nextValue === "function"
          ? (nextValue as (previousValue: T) => T)(valueRef.current)
          : nextValue;

      valueRef.current = resolvedValue;
      setValue(resolvedValue);
    },
    [],
  );

  return [value, setValueWithCallback, isReady];
}
