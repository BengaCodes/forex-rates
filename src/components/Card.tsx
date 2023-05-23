type CardProps = {
  currencyName: string
  price: number
  chosenCurrency: string
  openModal: () => void
  setModalCurrency: (curr: string) => void
  setExchangeRate: (rate: number) => void
}

const Card = ({
  currencyName,
  price,
  chosenCurrency,
  openModal,
  setModalCurrency,
  setExchangeRate
}: CardProps) => {
  const handleModalToggle = (rate: number, curr: string) => {
    openModal()
    setExchangeRate(rate)
    setModalCurrency(curr)
  }

  return (
    <div
      onClick={() => handleModalToggle(price, currencyName)}
      className=' bg-slate-500 rounded-lg shadow-lg p-4 flex w-1/3 justify-between gap-2 hover:cursor-pointer'
    >
      <h3 className='text-xl font-bold'>
        {' '}
        {chosenCurrency} / {currencyName}
      </h3>
      <p className='text-white'>{price}</p>
    </div>
  )
}

export default Card
