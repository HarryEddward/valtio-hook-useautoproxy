# valtio-hook-useautoproxy

A React hook for automatically proxying Valtio state.

![Simple GIF](https://github.com/HarryEddward/valtio-hook-useautoproxy/blob/main/.github/media/gif/simple-easy.gif)


## Installation

```bash
npm i valtio-hook-useautoproxy
```
```bash
pnpm i valtio-hook-useautoproxy
```
```bash
yarn i valtio-hook-useautoproxy
```
```bash
bun i valtio-hook-useautoproxy
```

## Usage

```bash
App.tsx
```
```typescript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { proxy } from 'valtio';
import { useAutoProxy } from 'valtio-hook-useautoproxy';
import { proxyState } from './proxy/proxyState';


function App() {
  
  
  const { count, inc } = useAutoProxy(proxyState);

  return (
    <>
      <div>
        {count}
        <button onClick={() => inc()}>Increase</button>
      </div>
    </>
  )
}

export default App;

```

## DO NOT USE THE PROXY INSIDE OF ELEMENT WITH THE HOOK ❌

```bash
proxy/proxyState.ts
```
```typescript
import { proxy } from "valtio";

interface IState {
    count: number;
    inc: () => void;
};

export const proxyState = proxy<IState>({
  count: 1,
  inc: () => ++proxyState.count
});
```


## API

### `useAutoProxy<T>(proxyState: T): Snapshot<T>`

- `proxyState`: A Valtio proxy object
- Returns a snapshot of the proxy state with methods bound to the original proxy

## License

MIT