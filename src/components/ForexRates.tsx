import Card from './Card'

type ForexRatesProps = {
  rates: {
    [key: string]: number
  }[]
  chosenCurrency: string
  openModal: () => void
  setModalCurrency: (curr: string) => void
  setExchangeRate: (rate: number) => void
}

const ForexRates = ({
  rates,
  chosenCurrency,
  openModal,
  setExchangeRate,
  setModalCurrency
}: ForexRatesProps) => {
  return (
    <div className=' flex flex-wrap gap-2 justify-center align-middle mt-3'>
      {rates.map((rate, i) => (
        <Card
          key={Object.keys(rate)[0] + i}
          currencyName={Object.keys(rate)[0]}
          price={Object.values(rate)[0]}
          chosenCurrency={chosenCurrency}
          openModal={openModal}
          setExchangeRate={setExchangeRate}
          setModalCurrency={setModalCurrency}
        />
      ))}
    </div>
  )
}

export default ForexRates
