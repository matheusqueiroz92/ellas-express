"use client"

import React from "react";
import { styled } from "styled-components";
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWithSearchIcon } from "./PrimaryInput";
import { CartControl } from "./CartControl";
import { useFilter } from "@/hooks/useFilter";
import Link from "next/link";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

interface HeaderProps {

}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: ${props => props.theme.desktopBreakPoint}) {
    padding: 20px 160px;
  }
`
const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  cursor: pointer;

  @media (min-width: ${props => props.theme.tabletBreakPoint}) {
    font-size: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakPoint}) {
    font-size: 40px;
  }
`

export default function Header(props: HeaderProps) {
  const { setSearch, search } = useFilter();

  return (
    <TagHeader>
      <Link href="/">
        <Logo className={sairaStencil.className}>
          Fashion Express
        </Logo>
      </Link>
      <div>
        <PrimaryInputWithSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl/>
      </div>
    </TagHeader>
  )

}