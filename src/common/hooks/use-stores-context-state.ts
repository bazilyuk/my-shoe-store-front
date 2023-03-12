import { useEffect, useReducer, useState } from 'react';
import { defaultStoresContext } from '@/common/context/stores-context';
import storesReducer from '@/common/context/stores-reducer';
import { CHANGE_INVENTORY, DECREASE_INVENTORY, INCREASE_INVENTORY } from '@/common/context/const';
import { notify } from '@/common/hooks/index';
import { SendRequestType } from '@/common/context/types';

export const useStoresContextState = () => {
  const [state, dispatch] = useReducer(storesReducer, defaultStoresContext);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/');

    setSocket(ws);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const { store, model, inventory } = JSON.parse(event.data);
        dispatch({
          type: CHANGE_INVENTORY,
          store,
          model,
          inventory,
        });
      };
    }

    return () => {
      socket?.close();
    };
  }, [socket]);

  const saveRequestedData = ({ storeTo, storeFrom, model, inventory }: SendRequestType) => {
    dispatch({
      type: INCREASE_INVENTORY,
      store: storeTo,
      model,
      inventory,
    });
    dispatch({
      type: DECREASE_INVENTORY,
      store: storeFrom,
      model,
      inventory,
    });
  };

  const sendRequest = (props: SendRequestType) => {
    const requestData = { ...props };
    socket?.send(JSON.stringify(requestData));
    // Whole this should be on backend, and I just need to get new data.
    saveRequestedData({ ...props });
  };

  return {
    state,
    dispatch,
    notify,
    sendRequest,
  };
};
