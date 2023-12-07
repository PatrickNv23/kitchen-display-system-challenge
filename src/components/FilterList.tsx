import React from 'react'
import { FilterType } from '../types'
import { FILTERS_BUTTONS } from '../data'
import style from './FilterList.module.css'

interface FilterContainerProps {
  filterSelected: FilterType
  onFilterChange: (filter: FilterType) => void
}

export const FilterList: React.FC<FilterContainerProps> = ({ filterSelected, onFilterChange }) => {
  return (
    <header>
      <h1>Filter Container</h1>
      <nav>
        <ul>
          {
            Object.entries(FILTERS_BUTTONS).map(([key, { label, value }]) => {
              const isSelected = key === filterSelected
              return (
                <li key={key}
                  className={isSelected ? style.selected : ''}
                  onClick={() => {
                    onFilterChange(value)
                  }}
                >
                  {label}
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}