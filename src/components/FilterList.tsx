import React from 'react'
import { FilterType } from '../types'
import { FILTERS_BUTTONS } from '../data'
import { FilterLabel, FilterListHeader } from './FilterListStyles'

interface FilterContainerProps {
  filterSelected: FilterType
  onFilterChange: (filter: FilterType) => void
}

export const FilterList: React.FC<FilterContainerProps> = ({ filterSelected, onFilterChange }) => {
  return (
    <FilterListHeader>
      <nav>
        <ul>
          {
            Object.entries(FILTERS_BUTTONS).map(([key, { label, value }]) => {
              const isSelected = key === filterSelected
              return (
                <FilterLabel $isSelected={isSelected} key={key}
                  onClick={() => {
                    onFilterChange(value)
                  }}
                >
                  {label}
                </FilterLabel>
              )
            })
          }
        </ul>
      </nav>
    </FilterListHeader>
  )
}