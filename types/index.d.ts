// types/index.d.ts

import type { Snapshot } from 'valtio';

export declare type AnyFunction = (...args: unknown[]) => unknown;
export declare function useAutoProxy<T extends object>(proxyState: T): Snapshot<T>;
