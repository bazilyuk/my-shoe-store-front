import { useContext, useMemo } from 'react';
import { ActionInventoryModalContext } from '@/components/pages/store/context/action-inventory-modal-context';
import { StoresContext } from '@/common/context/stores-context';
import { INVENTORY_ACTION_TYPE } from '@/components/pages/store/types';
import { Validator } from 'react-uforms';

export const useActionInventoryForm = (shopName) => {
  const { setIsOpen, actionType, setActionType, model, setModel } = useContext(ActionInventoryModalContext);
  const { sendRequest, stores } = useContext(StoresContext);

  const onClose = () => {
    setIsOpen?.(false);
    setActionType?.(undefined);
    setModel?.(undefined);
  };

  const onSubmit = (values) => {
    if (model?.inventory) {
      const isGet = actionType === INVENTORY_ACTION_TYPE.GET;
      sendRequest?.({
        storeTo: isGet ? shopName : values?.store,
        storeFrom: isGet ? values?.store : shopName,
        model: values?.model,
        inventory: values.amount,
      });
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

  const storeOptions = useMemo(() => {
    return stores
      .filter((item) => item.name !== shopName)
      .map((store) => {
        const storeName = store.name;
        const storeModel = store.models.find((item) => item.name === model?.name);
        const label = storeModel ? `${storeName} (${storeModel.inventory})` : storeName;

        return {
          label,
          value: storeName,
        };
      });
  }, [stores, shopName, model]);

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
