import { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import { defaultStoresContext } from '@/common/context/stores-context';
import storesReducer from '@/common/context/stores-reducer';
import { CHANGE_INVENTORY } from '@/common/context/const';
import { HIGH_LIMIT, LOW_LIMIT } from '@/common/const/store';

export const useStoresContextState = () => {
  const [state, dispatch] = useReducer(storesReducer, defaultStoresContext);

  const notify = ({ store, model, inventory }) => {
    const styles = {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (inventory < LOW_LIMIT) {
      toast.error(`In ${store} left only ${inventory} pairs of ${model}`, styles);
    }

    if (inventory > HIGH_LIMIT) {
      toast.warn(`In ${store} more than ${inventory} pairs of ${model}`, styles);
    }

    return null;
  };

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/');

    ws.onmessage = (event) => {
      const { store, model, inventory } = JSON.parse(event.data);

      notify({ store, model, inventory });

      dispatch({
        type: CHANGE_INVENTORY,
        store,
        model,
        inventory,
      });
    };

    return () => {
      ws.close();
    };
  }, []);

  return {
    state,
    dispatch,
  };
};
