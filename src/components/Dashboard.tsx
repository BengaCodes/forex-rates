import { Fragment, useEffect, useState } from 'react'
import SearchInput from './Search'
import ForexRates from './ForexRates'
import { useDataFetch } from '../hooks/useDataFetch'

type DashboardProps = {
  currency: string
}

const Dashboard = ({ currency }: DashboardProps) => {
  const [rates, setRates] = useState(null)

  const { data } = useDataFetch(currency)

  useEffect(() => {
    if (data) {
      setRates(data)
    }
  }, [data])

  const handleRateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  console.log({ rates })

  return (
    <Fragment>
      <SearchInput handleRateSearch={handleRateSearch} />
      <ForexRates />
    </Fragment>
  )
}

export default Dashboard
