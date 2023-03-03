import React, { useContext } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import { StoresContext } from '@/common/context/stores-context';
import { StoresRowItem } from '@/components/pages/home/components/stores-row-item';

export const StoresTable = () => {
  const { stores } = useContext(StoresContext);

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>№</TableCell>
          <TableCell>Store</TableCell>
          <TableCell>Notes</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stores.map((store, index) => (
          <StoresRowItem key={`store-${store.name}`} {...{ ...store, index }} />
        ))}
      </TableBody>
    </Table>
  );
};
