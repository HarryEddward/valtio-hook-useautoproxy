import { proxy } from "valtio";

interface IUseProxyState {
    count: number;
    increment: () => void;
}

export const useProxyState = proxy<IUseProxyState>({
    count: 1,
    increment: () => ++useProxyState.count
});