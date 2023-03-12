import React, { FC } from 'react';
import Link from 'next/link';
import { StorePageProps } from '@/components/pages/store/types';
import { Typography, Breadcrumbs } from '@mui/material';
import { StoreModelsTable } from '@/components/pages/store/components/models-table';
import { ActionInventoryModal } from '@/components/pages/store/components/action-inventory-modal';
import { ActionInventoryModalContext } from '@/components/pages/store/context/action-inventory-modal-context';
import { useActionInventoryModalState } from '@/components/pages/store/hooks/use-action-inventory-modal-state';

export const StorePageComponent: FC<StorePageProps> = ({ storeName }) => {
  const { isOpen, setIsOpen, actionType, setActionType, model, setModel } = useActionInventoryModalState();
  return (
    <ActionInventoryModalContext.Provider value={{ isOpen, setIsOpen, actionType, setActionType, model, setModel }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" passHref>
          Stores
        </Link>
        <Typography color="text.primary">{storeName}</Typography>
      </Breadcrumbs>
      <Typography my={5} variant="h3" component="h2" align="center">
        {storeName}
      </Typography>
      <StoreModelsTable storeName={storeName} />
      {isOpen ? <ActionInventoryModal shopName={storeName} /> : null}
    </ActionInventoryModalContext.Provider>
  );
};
