import { useState } from 'react'
import { formatCurrency } from '../utilities/helper'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  currency: string
  chosenCurrency: string
  rate: number
}

const Modal = ({
  isOpen,
  onClose,
  currency,
  chosenCurrency,
  rate
}: ModalProps) => {
  const [inputValue, setInputValue] = useState('')
  const [total, setTotal] = useState<number | undefined>()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleExchangeTotal = () => {
    setTotal(rate * +inputValue)
    setInputValue('')
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10'>
      <div
        onClick={() => {
          setTotal(undefined)
          return onClose()
        }}
        className='fixed inset-0 bg-black opacity-50'
      ></div>
      <div className='bg-white rounded-lg p-8 z-10 w-1/3 h-1/3'>
        <h2 className='text-lg font-bold mb-4'>Buy Currency!</h2>
        <div className='mb-4'>
          <label htmlFor='inputField' className='block font-medium mb-1'>
            Enter Xchange Amount:
          </label>
          <input
            id='inputField'
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <div className=' flex justify-between'>
          <p className=' text-gray-500 italic'>
            How much you will get for {chosenCurrency} / {currency}:
          </p>
          <span className=' cite'>
            {total && formatCurrency(total as number, currency)}
          </span>
        </div>
        <div className='flex justify-end'>
          <button
            type='button'
            className='px-4 py-2 mr-2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none'
            onClick={() => {
              setTotal(undefined)
              return onClose()
            }}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none'
            onClick={handleExchangeTotal}
          >
            Xchange
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
