import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { INVENTORY_ACTION_TYPE } from '@/components/pages/store/types';
import React, { useContext } from 'react';
import { ActionInventoryModalContext } from '@/components/pages/store/context/action-inventory-modal-context';
import { modelType } from '@/common/context/types';

export const StoreModelsActionButtons = ({ name, inventory }: modelType) => {
  const { setIsOpen, setActionType, setModel } = useContext(ActionInventoryModalContext);

  const openModal = (type: INVENTORY_ACTION_TYPE) => {
    setIsOpen?.(true);
    setActionType?.(type);
    setModel?.({ name, inventory });
  };
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
