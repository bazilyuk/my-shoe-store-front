import React, { FC } from 'react';
import { useRouter } from 'next/router';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { StoresRowItemProps } from '@/components/pages/home/types';
import { StoreChips } from '@/components/pages/home/components/store-chips';

export const StoresRowItem: FC<StoresRowItemProps> = ({ name, index, models }) => {
  const router = useRouter();

  const redirect = (store: string) => {
    router.push(`/stores/${store}`);
  };
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
        <StoreChips {...{ models, storeName: name }} />
      </TableCell>
    </TableRow>
  );
};
