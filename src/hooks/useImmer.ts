import { useState, useCallback } from 'react';
import { produce } from 'immer';

export type ValueSetter<T> = (v: T) => any;
export type ImmerSetter<T> = (cb: ValueSetter<T>) => void;

const useImmer = <T>(init: T): [T, ImmerSetter<T>] => {
  const [value, setValue] = useState<T>(init);
  const setImmer = useCallback((cb: ValueSetter<T>) => {
    setValue(value => produce(value, cb));
  }, []);
  return [value, setImmer];
}

export default useImmer
