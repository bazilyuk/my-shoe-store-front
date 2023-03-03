import React, { FC } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { StoresRowItemProps } from '@/components/pages/home/types';
import { UseStoresRowItem } from '@/components/pages/home/hooks/use-stores-row-item';

export const StoresRowItem: FC<StoresRowItemProps> = ({ name, index, models }) => {
  const { redirect, getChips } = UseStoresRowItem({ models, storeName: name });
  return (
    <TableRow
      sx={{ cursor: 'pointer', '&:last-child td, &:last-child th': { border: 0 } }}
      onClick={() => redirect(name)}
      hover
    >
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell component="th" scope="row">
        {getChips()}
      </TableCell>
    </TableRow>
  );
};
