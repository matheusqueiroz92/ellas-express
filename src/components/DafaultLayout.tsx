"use client"

import { styled } from "styled-components";

export const DefaultLayout = styled.div`
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakPoint}) {
    padding: 34px 160px;
  }
`