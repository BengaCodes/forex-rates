import { Fragment, useEffect, useState } from 'react'
import SearchInput from './Search'
import ForexRates from './ForexRates'
import { useDataFetch } from '../hooks/useDataFetch'
import { searchFxRates } from '../utilities/helper'
import Modal from './Modal'

type DashboardProps = {
  currency: string
  chosenCurrency: string
}

interface APIResponseType {
  base: string
  date: string
  motd: {
    [key: string]: number
  }
  rates: {
    [key: string]: number
  }
  success: boolean
}

interface Currency {
  [key: string]: number
}

const Dashboard = ({ currency, chosenCurrency }: DashboardProps) => {
  const [rates, setRates] = useState<APIResponseType>({
    base: '',
    date: '',
    motd: {},
    rates: {},
    success: true
  })
  const [currencies, setCurrencies] = useState<Currency[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsopen] = useState(false)
  const [modalCurrency, setModalCurrency] = useState('')
  const [exchangeRate, setExchangeRate] = useState(0)

  const { data } = useDataFetch(currency)

  useEffect(() => {
    if (data) {
      const ratesObjs = []
      for (const key in data.rates) {
        ratesObjs.push({ [key]: data.rates[key] })
      }
      setRates(data)
      setCurrencies(ratesObjs)
    }
  }, [data])

  const handleRateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleOpenModal = () => setIsopen(true)

  const handleModalCurrencySet = (curr: string) => {
    setModalCurrency(curr)
  }

  const handleModalExchangeRateSet = (rate: number) => {
    setExchangeRate(rate)
  }

  const handleClearsearch = () => {
    setSearchTerm('')
  }

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setCurrencies([searchFxRates(rates.rates, searchTerm) as Currency])
    } else {
      if (data) {
        const ratesObjs = []
        for (const key in data.rates) {
          ratesObjs.push({ [key]: data.rates[key] })
        }
        setRates(data)
        setCurrencies(ratesObjs)
      }
    }
  }, [data, rates.rates, searchTerm])

  return (
    <Fragment>
      <SearchInput
        handleRateSearch={handleRateSearch}
        searchTerm={searchTerm}
        clearSearch={handleClearsearch}
      />
      <ForexRates
        openModal={handleOpenModal}
        rates={currencies}
        chosenCurrency={chosenCurrency}
        setModalCurrency={handleModalCurrencySet}
        setExchangeRate={handleModalExchangeRateSet}
      />
      <Modal
        chosenCurrency={chosenCurrency}
        currency={modalCurrency}
        isOpen={isOpen}
        rate={exchangeRate}
        onClose={() => setIsopen(false)}
      />
    </Fragment>
  )
}

export default Dashboard
