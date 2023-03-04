import { createContext } from 'react';
import { ActionInventoryModalContextType } from '@/components/pages/store/context/types';

export const defaultActionInventoryModalContext: ActionInventoryModalContextType = {
  isOpen: false,
  setIsOpen: undefined,
  actionType: undefined,
  setActionType: undefined,
  model: undefined,
  setModel: undefined,
};
export const ActionInventoryModalContext = createContext(defaultActionInventoryModalContext);
