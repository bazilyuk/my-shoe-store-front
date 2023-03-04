import React, { FC, useContext } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import { StoresContext } from '@/common/context/stores-context';
import { StorePageProps } from '@/components/pages/store/types';
import { StoreModelsRowItem } from '@/components/pages/store/components/models-row-item';

export const StoreModelsTable: FC<StorePageProps> = ({ storeName }) => {
  const { stores } = useContext(StoresContext);

  const store = stores.find((store) => store.name === storeName);
  return (
    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>№</TableCell>
          <TableCell>Model</TableCell>
          <TableCell>Inventory</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {store?.models?.map((model, index) => (
          <StoreModelsRowItem key={`${storeName}-model-${model.name}`} {...{ ...model, index }} />
        ))}
      </TableBody>
    </Table>
  );
};
