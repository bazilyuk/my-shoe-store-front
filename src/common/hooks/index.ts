import { HIGH_LIMIT, LOW_LIMIT } from '@/common/const/stores';
import { toast } from 'react-toastify';
import { toastStyles } from '@/common/const/styles';

export const notify = ({ store, model, inventory }) => {
  if (inventory < LOW_LIMIT) {
    toast.error(`In ${store} left only ${inventory} pairs of ${model}`, toastStyles);
  }

  if (inventory > HIGH_LIMIT) {
    toast.warn(`In ${store} more than ${inventory} pairs of ${model}`, toastStyles);
  }

  return null;
};
