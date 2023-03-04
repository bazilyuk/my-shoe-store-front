export type modelType = {
  id?: string;
  name: string;
  inventory: number;
};

export type storeType = {
  id?: string;
  name: string;
  models: modelType[];
};

export type StoreContextType = {
  stores: storeType[];
  dispatch: any;
  notify?: ({ store, model, inventory }) => void;
  sendRequest?: ({ store, model, inventory }) => void;
};
