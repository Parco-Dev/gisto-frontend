export const useFilters = () => useState<any>('Filters', () => [])

export const setFilters = (files: any) => {
  useFilters().value = files;
}

export const useFilterSelected = () => useState<any>('FilterSelected', () => false)

export const setFilterSelected = (value: boolean) => {
  useFilterSelected().value = value;
}