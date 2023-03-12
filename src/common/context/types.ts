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

export type SendRequestType = {
  storeTo: string;
  storeFrom: string;
  model: string;
  inventory: number;
};

export type StoreContextType = {
  stores: storeType[];
  dispatch: any;
  notify?: ({ store, model, inventory }) => void;
  sendRequest?: ({ storeTo, storeFrom, model, inventory }: SendRequestType) => void;
};
