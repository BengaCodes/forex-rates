import { useQuery } from 'react-query'

export const useDataFetch = (currency?: string) => {
  return useQuery({
    queryKey: ['fxData', currency],
    queryFn: () =>
      fetch(`https://api.exchangerate.host/latest?base=${currency}`).then(
        (res) => res.json()
      )
  })
}
