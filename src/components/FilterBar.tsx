"use client"

import { styled } from "styled-components";
import { FilterByType } from "./FilterByType";
import { FilterByPriority } from "./FilterByPriority";

const ContainerFilterBar = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  /* padding: 20px 160px; */
`

export function FilterBar() {
  return (
    <ContainerFilterBar>
      <FilterByType/>
      <FilterByPriority/>
    </ContainerFilterBar>
  )
}