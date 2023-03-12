import React, { FC } from 'react';
import { Form } from 'react-uforms';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box } from '@mui/material';
import { InventoryModalProps } from '@/components/pages/store/types';
import { FormSelectField } from '@/components/ui/form/select';
import { FormInputField } from '@/components/ui/form/input';
import { useActionInventoryForm } from '@/components/pages/store/hooks/use-action-inventory-form';

export const ActionInventoryModal: FC<InventoryModalProps> = ({ shopName }) => {
  const { onClose, options, type, validation, defaultValues, onSubmit, shoesModel } = useActionInventoryForm(shopName);
  return (
    <Dialog open={true} onClose={onClose} maxWidth="md">
      <Form onSubmit={onSubmit} defaultValues={defaultValues} validation={validation}>
        <DialogTitle>
          {shopName} | {shoesModel}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>To {type} inventory choose shop and amount:</DialogContentText>
          <Box sx={{ height: 30 }} />
          <FormSelectField
            label="Select store:"
            isClearable={false}
            isMulti={false}
            id="store"
            name="store"
            options={options}
            placeholder="Select default"
            required
          />
          <Box sx={{ height: 30 }} />
          <FormInputField type="number" label="Amount:" name="amount" id="amount" />
          <Box sx={{ height: 30 }} />
          <FormInputField type="text" disabled label="Model:" name="model" id="model" />
          <Box sx={{ height: 70 }} />
        </DialogContent>
        <DialogActions sx={{ py: 3, px: 3 }}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Apply
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};
