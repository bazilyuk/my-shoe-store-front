import { modelType, storeType } from '@/common/context/types';

export interface StoresRowItemProps extends storeType {
  index: number;
}

export type StoreChipsProps = {
  storeName: string;
  models: modelType[];
};
