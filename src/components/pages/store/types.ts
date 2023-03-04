import { modelType } from '@/common/context/types';

export type StorePageProps = {
  storeName: string;
};

export interface ModelsRowItemProps extends modelType {
  index: number;
}

export enum INVENTORY_ACTION_TYPE {
  GET = 'get',
  SEND = 'send',
}

export type InventoryModalProps = {
  shopName: string;
};
