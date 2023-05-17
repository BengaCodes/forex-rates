type SearchProps = {
  handleRateSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ handleRateSearch }: SearchProps) => {
  return (
    <div className='flex items-center justify-center bg-yellow-300 py-2'>
      <input
        type='text'
        className='bg-yellow-200 rounded-md px-4 py-2'
        placeholder='Search...'
        onChange={handleRateSearch}
      />
    </div>
  )
}

export default SearchInput
