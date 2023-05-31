import { styled } from "styled-components"
import { ArrowIcon } from "./Icons/ArrowIcon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityType } from "@/types/PriorityType"

const ContainerFilterByPriority = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`

const OptionsPriorityFilter = styled.ul`
  position: absolute;
  width: 150px;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  list-style: none;
  top: 100%;
  right: 8px;
  cursor: pointer;
  z-index: 999;
  
  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  li + li {
    margin-top: 4px;
  }

  li:hover{
    color: var(--orange-low);
  }
`

export function FilterByPriority() {
  const [optionsFilter, setOptionsFilter] = useState(false);
  const { setPriority } = useFilter()

  const handleOptionsFilter = () => setOptionsFilter(prev => !prev);
  const handleChangePriority = (value: PriorityType) => {
    setPriority(value);
    setOptionsFilter(false);
  }
  
  return (
    <ContainerFilterByPriority>
      <button
        type="button"
        onClick={handleOptionsFilter}
      >
        Organizar por
        <ArrowIcon/>
      </button>
      {optionsFilter &&
        <OptionsPriorityFilter>
          <li
            onClick={() => handleChangePriority(PriorityType.NEWS)}
          >
            Novidades
          </li>
          <li
            onClick={() => handleChangePriority(PriorityType.BIGGEST_PRICE)}
          >
            Maior preço
          </li>
          <li
            onClick={() => handleChangePriority(PriorityType.MINOR_PRICE)}
          >
            Menor preço
          </li>
          <li
            onClick={() => handleChangePriority(PriorityType.POPULARITY)}
          >
            Mais vendidos
          </li>
        </OptionsPriorityFilter>
      }
    </ContainerFilterByPriority>
  )
}