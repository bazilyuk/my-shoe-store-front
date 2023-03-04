import React, { useContext } from 'react';
import { ActionInventoryModalContext } from '@/components/pages/store/context/action-inventory-modal-context';
import { HIGH_LIMIT, LOW_LIMIT } from '@/common/const/store';
import { INVENTORY_ACTION_TYPE } from '@/components/pages/store/types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { modelType } from '@/common/context/types';

export const UseStoreModelsRowItem = ({ name, inventory }: modelType) => {
  const { setIsOpen, setActionType, setModel } = useContext(ActionInventoryModalContext);

  const needMore = inventory < LOW_LIMIT;
  const over = inventory > HIGH_LIMIT;
  const color = needMore || over ? 'red' : 'grey';

  const openModal = (type: INVENTORY_ACTION_TYPE) => {
    setIsOpen?.(true);
    setActionType?.(type);
    setModel?.({ name, inventory });
  };

  const ActionButton = () => {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={() => openModal(INVENTORY_ACTION_TYPE.GET)}>
            Get Inventory
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => openModal(INVENTORY_ACTION_TYPE.SEND)}>
            Send Inventory
          </Button>
        </Grid>
      </Grid>
    );
  };

  return {
    color,
    ActionButton,
  };
};
