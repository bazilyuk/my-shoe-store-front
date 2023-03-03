import { modelType, storeType } from '@/common/context/types';

export interface StoresRowItemProps extends storeType {
  index: number;
}

export type UseStoresRowItemProps = {
  storeName: string;
  models: modelType[];
};
