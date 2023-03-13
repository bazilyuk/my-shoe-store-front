import { HIGH_LIMIT, LOW_LIMIT } from '@/common/const/stores';
import { toast } from 'react-toastify';
import { toastStyles } from '@/common/const/styles';
import { SHOES_MODELS, STORE_STORES } from '@/common/const/stores';
import uuid from 'react-uuid';

export const generateDefaultStores = () => {
  const models = SHOES_MODELS.map((model: string) => {
    return {
      id: uuid(),
      name: model,
      inventory: 50,
    };
  });
  return STORE_STORES.map((store: string) => {
    return {
      id: uuid(),
      name: store,
      models: models,
    };
  });
};
export const notify = ({ store, model, inventory }) => {
  if (inventory < LOW_LIMIT) {
    toast.error(`In ${store} left only ${inventory} pairs of ${model}`, toastStyles);
  }

  if (inventory > HIGH_LIMIT) {
    toast.warn(`In ${store} more than ${inventory} pairs of ${model}`, toastStyles);
  }

  return null;
};

export const getInventoryColor = ({ inventory }: { inventory: number }) => {
  const needMore = inventory < LOW_LIMIT;
  const over = inventory > HIGH_LIMIT;

  return needMore || over ? 'red' : 'grey';
};
