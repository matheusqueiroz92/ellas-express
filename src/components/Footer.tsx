"use client"

import { styled } from 'styled-components';

export default function Footer() {
  
  const TagFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    font-size: 18px;
  `
  return (
    <TagFooter>
      <p>E-commerce. Site de vendas de roupas e acessórios</p>
      <p>Desenvolvido por Matheus Queiroz © Todos os direitos reservados.</p>
    </TagFooter>
  )
}