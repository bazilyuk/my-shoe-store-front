import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { modelType } from '@/common/context/types';
import { HIGH_LIMIT, LOW_LIMIT } from '@/common/const/store';
import { Chip, Grid } from '@mui/material';
import { UseStoresRowItemProps } from '@/components/pages/home/types';

export const UseStoresRowItem = ({ models, storeName }: UseStoresRowItemProps) => {
  // list of model that more than HIGH_LIMIT
  const [over, setOver] = useState<modelType[]>([]);
  // list of model that less than LOW_LIMIT
  const [less, setLess] = useState<modelType[]>([]);
  const router = useRouter();

  const redirect = (store: string) => {
    router.push(`/stores/${store}`);
  };

  useEffect(() => {
    // here we check if in this store we have problem with each model. When models list changed we check do we need to put or remove some model from the list
    models.forEach((model) => {
      const { inventory, name: modelName } = model;
      const inOverList = over.find((item) => item.name === modelName);
      const inLessList = less.find((item) => item.name === modelName);

      if (inventory <= HIGH_LIMIT && inOverList) {
        // if model was in the over inventory list but now is not then remove it
        setOver((prevState) => prevState.filter((item) => item.name === modelName));
      }
      if (inventory > HIGH_LIMIT && !inOverList) {
        // if model wasn't in the over inventory list but now is then add it
        setOver((prevState) => [...prevState, model]);
      }

      if (inventory >= LOW_LIMIT && inLessList) {
        // if model was in the less inventory list but now is not then remove it
        setLess((prevState) => prevState.filter((item) => item.name === modelName));
      }
      if (inventory < LOW_LIMIT && !inLessList) {
        // if model wasn't in the less inventory list but now is then add it
        setLess((prevState) => [...prevState, model]);
      }
    });
  }, [models]);

  const getChips = () => {
    // this function generate chips for the store. If whole okay with inventory, then green chip, if not we show what model of shoes need to fix
    const NormalChip = () => <Chip size="medium" label="success" color="success" />;
    const OverChip = ({ name: modelName, inventory }: modelType) => (
      <Grid item>
        <Chip size="small" label={`${modelName}: ${inventory}`} color="warning" />
      </Grid>
    );
    const LessChip = ({ name: modelName, inventory }: modelType) => (
      <Grid item>
        <Chip size="small" label={`${modelName}: ${inventory}`} color="error" />
      </Grid>
    );

    const overChips = over.map((item) => <OverChip key={`${storeName}-over-${item.name}`} {...item} />);
    const lessChips = less.map((item) => <LessChip key={`${storeName}-less-${item.name}`} {...item} />);

    if (overChips.length < 1 && lessChips.length < 1) {
      return <NormalChip />;
    }

    return (
      <Grid container spacing={2}>
        {overChips}
        {lessChips}
      </Grid>
    );
  };

  return {
    redirect,
    getChips,
  };
};
