import { StoreContextType } from '@/common/context/types';
import { CHANGE_INVENTORY, DECREASE_INVENTORY, INCREASE_INVENTORY } from '@/common/context/const';
import { notify } from '@/common/helpers';

const storesReducer = (state: StoreContextType, action: any): StoreContextType => {
  const newStores = JSON.parse(JSON.stringify(state.stores));
  const isChangeInventory = action.type === CHANGE_INVENTORY;
  const isIncreaseInventory = action.type === INCREASE_INVENTORY;
  const isDecreaseInventory = action.type === DECREASE_INVENTORY;

  switch (true) {
    case isChangeInventory:
    case isIncreaseInventory:
    case isDecreaseInventory:
      const storeIndex = newStores?.findIndex(({ name }) => name === action.store);

      if (storeIndex !== -1) {
        const modelIndex = newStores[storeIndex].models.findIndex(({ name }) => name === action.model);

        if (modelIndex !== -1) {
          const getNewInventory = () => {
            const slot = newStores[storeIndex].models[modelIndex].inventory;
            const amount = +action.inventory;

            switch (true) {
              case isChangeInventory:
                return amount;
              case isIncreaseInventory:
              case isDecreaseInventory:
                return isDecreaseInventory ? slot - amount : slot + amount;
              default:
                return slot;
            }
          };

          const inventory = getNewInventory();

          newStores[storeIndex].models[modelIndex].inventory = inventory;
          notify({ store: action.store, model: action.model, inventory: inventory });

          return {
            ...state,
            stores: [...newStores],
          };
        }
      }

      return state;
    default:
      return state;
  }
  // throw Error('Unknown action.');
};

export default storesReducer;
