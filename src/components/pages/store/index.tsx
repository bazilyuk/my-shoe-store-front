import React, { FC, useContext } from 'react';
import Link from 'next/link';
import { StorePageProps } from '@/components/pages/store/types';
import { StoresContext } from '@/common/context/stores-context';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Typography, Breadcrumbs } from '@mui/material';
import { HIGH_LIMIT, LOW_LIMIT } from '@/common/const/store';

export const StorePageComponent: FC<StorePageProps> = ({ name }) => {
  const { stores } = useContext(StoresContext);

  const store = stores.find((store) => store.name === name);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" passHref>
          Stores
        </Link>
        <Typography color="text.primary">{name}</Typography>
      </Breadcrumbs>
      <Typography my={5} variant="h3" component="h2" align="center">
        {name}
      </Typography>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Inventory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store?.models?.map(({ name, inventory }, index) => {
            const needMore = inventory < LOW_LIMIT;
            const over = inventory > HIGH_LIMIT;
            const color = needMore || over ? 'red' : 'grey';
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
