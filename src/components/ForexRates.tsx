import { useQuery } from 'react-query'

type ForexRatesProps = {
  currency: string
}

const ForexRates = ({ currency }: ForexRatesProps) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['fxData', currency],
    queryFn: () =>
      fetch(`https://api.exchangerate.host/latest?base=${currency}`).then(
        (res) => res.json()
      )
  })

  console.log(isLoading, error, data)

  return <div>ForexRates</div>
}

export default ForexRates
