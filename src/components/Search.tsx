type SearchProps = {
  handleRateSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
  clearSearch: () => void
}

const SearchInput = ({
  handleRateSearch,
  searchTerm,
  clearSearch
}: SearchProps) => {
  return (
    <div className='flex items-center justify-center bg-yellow-300 py-2'>
      <div className='relative'>
        <input
          type='text'
          className='w-full py-2 px-4 pl-4 pr-10 bg-yellow-200 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          placeholder='Search...'
          onChange={handleRateSearch}
          value={searchTerm}
        />
        <button
          onClick={clearSearch}
          className='absolute top-0 right-0 px-3 py-2 bg-transparent text-gray-500 hover:text-gray-700 focus:outline-none'
        >
          x
        </button>
      </div>
    </div>
  )
}

export default SearchInput
