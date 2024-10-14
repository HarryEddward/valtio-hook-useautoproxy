import { renderHook, act } from '@testing-library/react-hooks';
import { proxy } from 'valtio';
import { useAutoProxy } from '../src/useAutoProxy';
import { useProxyState } from './proxys/proxyState';

describe('useAutoProxy', () => {

  it('should be reactive to external changes', () => {

    const { result, rerender } = renderHook(() => useAutoProxy(useProxyState));

    expect(result.current.count).toBe(1);

    act(() => {
      result.current.increment();  // Modificación segura
    });

    rerender();

    console.log(result.current.count);
    expect(result.current.count).toBe(2);
  });

});
