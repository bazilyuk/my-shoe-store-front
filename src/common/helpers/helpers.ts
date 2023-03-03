import { SHOES_MODELS, STORE_STORES } from '@/common/context/const';
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
