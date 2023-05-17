type NavBarProps = {
  handleCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const NavBar = ({ handleCurrencyChange }: NavBarProps) => {
  return (
    <header className='bg-gray-800 py-4'>
      <nav className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <span className='text-white text-lg font-semibold'>Forex Rates</span>
        </div>
        <div className='flex items-center'>
          <span className='text-gray-300 hover:text-white px-3 py-2 rounded-md'>
            Select Currency
          </span>
          <select
            onChange={handleCurrencyChange}
            className='ml-4 p-2 rounded-md bg-white text-gray-800'
          >
            <option value='USD'>Dollar</option>
            <option value='GBP'>Pound</option>
            <option value='EUR'>Euro</option>
          </select>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
