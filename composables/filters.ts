export const useFilters = () => useState<any>('Filters', () => { return { category: null, workType: null } })

export const setFilter = (key: string, value: string | null) => {
  useFilters().value[key] = value;
}

// export const useFilterSelected = () => useState<any>('FilterSelected', () => false)

// export const setFilterSelected = (value: boolean) => {
//   useFilterSelected().value = value;
// }