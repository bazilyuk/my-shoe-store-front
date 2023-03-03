import { StoreContextType } from '@/common/context/types';
import { CHANGE_INVENTORY } from '@/common/context/const';

const storesReducer = (state: StoreContextType, action: any): StoreContextType => {
  if (action.type === CHANGE_INVENTORY) {
    const newStores = JSON.parse(JSON.stringify(state.stores));
    const storeIndex = newStores.findIndex(({ name }) => name === action.store);

    if (storeIndex !== -1) {
      const modelIndex = newStores[storeIndex].models.findIndex(({ name }) => name === action.model);

      if (modelIndex !== -1) {
        newStores[storeIndex].models[modelIndex].inventory = action.inventory;

        return {
          ...state,
          stores: [...newStores],
        };
      }
    }
  }

  return state;

  // throw Error('Unknown action.');
};

export default storesReducer;
