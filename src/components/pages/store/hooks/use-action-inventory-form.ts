import { useContext } from 'react';
import { ActionInventoryModalContext } from '@/components/pages/store/context/action-inventory-modal-context';
import { StoresContext } from '@/common/context/stores-context';
import { INVENTORY_ACTION_TYPE } from '@/components/pages/store/types';
import { Validator } from 'react-uforms';

export const UseActionInventoryForm = (shopName) => {
  const { setIsOpen, actionType, setActionType, model, setModel } = useContext(ActionInventoryModalContext);
  const { sendRequest, stores } = useContext(StoresContext);

  const onClose = () => {
    setIsOpen?.(false);
    setActionType?.(undefined);
    setModel?.(undefined);
  };
  const onSubmit = (values) => {
    if (model?.inventory) {
      if (actionType === INVENTORY_ACTION_TYPE.GET) {
        // send data on server where I decrease inventory in checked store model
        sendRequest?.({
          store: values?.store?.[0],
          model: values?.model,
          inventory: +values?.store?.[1] - +values.amount,
        });
        // send data on server where I increase inventory in current store model
        sendRequest?.({ store: shopName, model: values?.model, inventory: +model?.inventory + +values.amount });
      } else {
        // send data on server where I decrease inventory in checked store model
        sendRequest?.({
          store: values?.store?.[0],
          model: values?.model,
          inventory: +values?.store?.[1] + +values.amount,
        });

        // send data on server where I increase inventory in current store model
        sendRequest?.({ store: shopName, model: values?.model, inventory: +model?.inventory - +values.amount });
      }
    }
    onClose();
  };

  const defaultValues = {
    model: model?.name,
  };

  const validation = () => ({
    store: [Validator.Required()],
    amount: [Validator.Required()],
  });

  const storeOptions = stores
    .filter((item) => item.name !== shopName)
    .map((store) => {
      const storeName = store.name;
      const storeModel = store.models.find((item) => item.name === model?.name);
      const label = storeModel ? `${storeName} (${storeModel.inventory})` : storeName;

      return {
        label,
        value: [storeName, storeModel?.inventory],
      };
    });

  return {
    onClose,
    validation,
    onSubmit,
    defaultValues,
    type: actionType,
    shoesModel: model?.name,
    options: storeOptions,
  };
};
