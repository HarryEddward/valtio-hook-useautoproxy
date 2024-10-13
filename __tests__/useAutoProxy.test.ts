import { renderHook, act } from '@testing-library/react-hooks';
import { proxy } from 'valtio';
import { useAutoProxy } from '../src/useAutoProxy';

describe('useAutoProxy', () => {

  it('should be reactive to external changes', () => {
    const proxyState = proxy({ count: 0 });
    const { result, rerender } = renderHook(() => useAutoProxy(proxyState));

    expect(result.current.count).toBe(0);

    act(() => {
      proxyState.count = 5;  // Modificación segura
    });

    rerender();

    console.log(proxyState.count);
    expect(result.current.count).toBe(5);
  });

});
