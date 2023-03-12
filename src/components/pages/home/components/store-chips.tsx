import React, { FC } from 'react';
import { Chip, Grid } from '@mui/material';
import { modelType } from '@/common/context/types';
import { StoreChipsProps } from '@/components/pages/home/types';
import { HIGH_LIMIT, LOW_LIMIT } from '@/common/const/stores';

export const StoreChips: FC<StoreChipsProps> = ({ models, storeName }) => {
  const NormalChip = () => <Chip size="medium" label="success" color="success" />;
  const WarningChip = ({ name: modelName, inventory }: modelType) => (
    <Grid item>
      <Chip size="small" label={`${modelName}: ${inventory}`} color={inventory < LOW_LIMIT ? 'error' : 'warning'} />
    </Grid>
  );

  const overChips = models
    .filter((model) => model.inventory < LOW_LIMIT)
    .map((item) => <WarningChip key={`${storeName}-over-${item.name}`} {...item} />);
  const lowChips = models
    .filter((model) => model.inventory > HIGH_LIMIT)
    .map((item) => <WarningChip key={`${storeName}-low-${item.name}`} {...item} />);

  if (overChips.length < 1 && lowChips.length < 1) {
    return <NormalChip />;
  }

  return (
    <Grid container spacing={2}>
      {overChips}
      {lowChips}
    </Grid>
  );
};
