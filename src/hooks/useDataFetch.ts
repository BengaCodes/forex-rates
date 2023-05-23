import { useQuery } from 'react-query'

export const useDataFetch = (currency?: string) => {
  return useQuery({
    queryKey: ['fxData', currency],
    queryFn: () =>
      fetch(`https://api.exchangerate.host/latest?base=${currency}`).then(
        (res) => res.json()
      ),
    cacheTime: 6 * 60 * 60 * 1000
  })
}
