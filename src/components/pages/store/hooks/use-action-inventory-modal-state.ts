import { useState } from 'react';
import { modelType } from '@/common/context/types';
import { INVENTORY_ACTION_TYPE } from '@/components/pages/store/types';

export const UseActionInventoryModalState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState<INVENTORY_ACTION_TYPE | undefined>(undefined);
  const [model, setModel] = useState<modelType | undefined>(undefined);

  return {
    isOpen,
    setIsOpen,
    actionType,
    setActionType,
    model,
    setModel,
  };
};
