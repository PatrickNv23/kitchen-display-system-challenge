import React from 'react'
import { FilterType } from '../types'
import { FILTERS_BUTTONS } from '../data'

interface FilterContainerProps {
  filterSelected: FilterType
  onFilterChange: (filter: FilterType) => void
}

export const FilterList: React.FC<FilterContainerProps> = ({ filterSelected, onFilterChange }) => {
  return (
    <header>
      <nav>
        <ul>
          {
            Object.entries(FILTERS_BUTTONS).map(([key, { label, value }]) => {
              const isSelected = key === filterSelected
              return (
                <li key={key}
                  className={isSelected ? 'selected' : ''}
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