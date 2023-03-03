import { createContext } from 'react';
import { StoreContextType } from './types';
import { generateDefaultStores } from '@/common/helpers/helpers';

export const defaultStoresContext: StoreContextType = {
  stores: generateDefaultStores(),
  dispatch: undefined,
};

export const StoresContext = createContext(defaultStoresContext);