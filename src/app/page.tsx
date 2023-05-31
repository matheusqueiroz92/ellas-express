"use client"

import { DefaultLayout } from '@/components/DafaultLayout';
import { FilterBar } from '@/components/FilterBar';
import { ProductList } from '@/components/ProductsList';
import { styled } from 'styled-components';

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
  return (
    <DefaultLayout>
      <PageWrapper>
        <FilterBar/>
        <ProductList/>
      </PageWrapper>
    </DefaultLayout>
  )
}
