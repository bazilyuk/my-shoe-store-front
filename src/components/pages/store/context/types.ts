import { INVENTORY_ACTION_TYPE } from '@/components/pages/store/types';
import { modelType } from '@/common/context/types';

export type ActionInventoryModalContextType = {
  isOpen: boolean;
  setIsOpen?: (value: boolean) => void;
  actionType?: INVENTORY_ACTION_TYPE;
  setActionType?: (type: INVENTORY_ACTION_TYPE | undefined) => void;
  model?: modelType;
  setModel?: (item: modelType | undefined) => void;
};
