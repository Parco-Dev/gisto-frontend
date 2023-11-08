export const useFilters = () => useState<any>('Filters', () => { return { category: null, workType: null } })

export const setFilter = (key: string, value: string | null) => {
  useFilters().value[key] = value;
}

export const useWork = () => useState<any>('Work', () => {})

export const setWork = (work: any) => {
  useWork().value = work;
  useFilteredWork().value = work;
}

export const useProject = () => useState<any>('Project', () => {})

export const setProject = (project: any) => {
  useProject().value = project;
}

export const useFilteredWork = () => useState<any>('FilteredWork', () => {})

export const setFilteredWork = (sort?: string) => {
  let sorted, filtered;
  const filters = useFilters();

  // First, filter list of work depending on active filters
  filtered = useWork().value;
  if (filters.value.category) filtered = filtered.filter((p: any) => p.category == filters.value.category)
  if (filters.value.workType) filtered = filtered.filter((p: any) => p.type_of_work == filters.value.workType)

  // Then, sort list of filtered work depending on selected sorting
  switch (sort) {
    case 'year':
      sorted = filtered.sort((a: any, b: any) => b.year.localeCompare(a.year))
      break;
    case 'name':
      sorted = filtered.sort((a: any, b: any) => a.title.localeCompare(b.title))
      break;
    case 'client':
      sorted = filtered.sort((a: any, b: any) => a.client.localeCompare(b.client))
      break;
    case 'place':
      sorted = filtered.sort((a: any, b: any) => a.place.localeCompare(b.place))
      break;
    default:
      sorted = filtered;
      break;
  }

  useFilteredWork().value = sorted;
}