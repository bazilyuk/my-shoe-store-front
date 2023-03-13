import React, { FC } from 'react';
import { ModelsRowItemProps } from '@/components/pages/store/types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { StoreModelsActionButtons } from '@/components/pages/store/components/action-buttons';
import { getInventoryColor } from '@/common/helpers';

export const StoreModelsRowItem: FC<ModelsRowItemProps> = ({ name, inventory, index }) => {
  const color = getInventoryColor({ inventory });
  return (
    <TableRow key={`store-${name}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell component="th" scope="row" sx={{ color }}>
        {inventory}
      </TableCell>
      <TableCell component="th" scope="row">
        <StoreModelsActionButtons {...{ name, inventory }} />
      </TableCell>
    </TableRow>
  );
};
