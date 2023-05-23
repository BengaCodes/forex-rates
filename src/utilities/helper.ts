export const searchFxRates = (
  rates: { [key: string]: number },
  searchTerm: string
) => {
  if (searchTerm.trim().length === 0) return

  const results: {
    [key: string]: number
  } = {}

  for (const [key, value] of Object.entries(rates)) {
    if (key.toUpperCase().includes(searchTerm.toUpperCase())) {
      results[key] = value
    }
  }

  return results
}

export const formatCurrency = (curr: number, currency: string) => {
  return Intl.NumberFormat('en-GB', { style: 'currency', currency }).format(
    curr
  )
}
