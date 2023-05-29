"use client"

import SingleProduct from "@/components/SingleProduct";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from './page.module.css'

export default function ProdutoEspecifico({params} : {params: {id: string}}) {
  const client = new QueryClient()
  
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <SingleProduct id={params.id}/>
      </main>
    </QueryClientProvider>
  )
}