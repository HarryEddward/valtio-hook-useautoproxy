# valtio-hook-useautoproxy

A React hook for automatically proxying Valtio state.

<div class="tenor-gif-embed" data-postid="9276124" data-share-method="host" data-aspect-ratio="1.60819" data-width="100%"><a href="https://tenor.com/view/simple-easy-easy-game-easy-life-deal-with-it-gif-9276124">Simple GIF</a>from <a href="https://tenor.com/search/simple-gifs">Simple GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

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