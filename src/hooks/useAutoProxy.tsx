import { useSnapshot } from 'valtio';
import type { Snapshot } from 'valtio';
import { useRef, useEffect } from 'react';
import type { AnyFunction } from '../types/index';

export function useAutoProxy<T extends object>(proxyState: T): Snapshot<T> {
  const stateRef = useRef<T>(proxyState);

  useEffect(() => {
    const functions: Record<string, AnyFunction> = {};
    for (const key in proxyState) {
      if (typeof proxyState[key] === 'function') {
        functions[key] = proxyState[key] as AnyFunction;
      }
    }

    for (const key in functions) {
      (stateRef.current as Record<string, AnyFunction>)[key] = function (...args: unknown[]) {
        console.log(`Llamando a la función ${key}`);
        return functions[key].apply(proxyState, args);
      };
    }
  }, [proxyState]);

  const snapshot = useSnapshot(stateRef.current);
  console.log("Snapshot actual:", snapshot);

  return snapshot;
}