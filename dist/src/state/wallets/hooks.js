import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks.js';
import { addConnectedWallet } from './reducer.js';

function useConnectedWallets() {
  const dispatch = useAppDispatch();
  const connectedWallets = useAppSelector(state => state.wallets.connectedWallets);
  const addWallet = useCallback(wallet => {
    dispatch(addConnectedWallet(wallet));
  }, [dispatch]);
  return [connectedWallets, addWallet];
}

export { useConnectedWallets };
