# use-auto-proxy

A React hook for automatically proxying Valtio state.

## Installation

```bash
npm i valtio-hook-useautoproxy
```
or
```bash
pnpm i valtio-hook-useautoproxy
```
or
```bash
yarn add valtio-hook-useautoproxy
```
or
```bash
bun i valtio-hook-useautoproxy
```

## Usage

```typescript
import { useAutoProxy } from 'use-auto-proxy';
import { proxy } from 'valtio';

const state = proxy({
  count: 0,
  increment: () => { state.count++ }
});

function Component() {
  const { count, increment } = useAutoProxy(state);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## API

### `useAutoProxy<T>(proxyState: T): Snapshot<T>`

- `proxyState`: A Valtio proxy object
- Returns a snapshot of the proxy state with methods bound to the original proxy

## License

MIT