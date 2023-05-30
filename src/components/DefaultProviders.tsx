"use client"

import { FilterContextProvider } from "@/contexts/FilterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProviderProops {
  children: ReactNode;
}

const theme = {
  desktopBreakPoint: "1068px",
  tabletBreakPoint: "768px",
}

// acrescentar um ícone para mostrar em telas menores no lugar das categorias

export default function DefaultProviders({children}: DefaultProviderProops) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
}