export const useFilters = () => useState<any>('Filters', () => { return { category: null, workType: null } })

export const setFilter = (key: string, value: string | null) => {
  useFilters().value[key] = value;
}