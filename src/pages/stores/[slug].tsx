import React from 'react';
import type { NextPage, NextPageContext } from 'next';
import { StorePageComponent } from '@/components/pages/store';

const StorePage: NextPage<{ slug: string }> = ({ slug }) => {
  return <StorePageComponent name={slug} />;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  const storeSlug = query.slug?.toString() || '';

  return { props: { slug: storeSlug } };
};

export default StorePage;
